import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookModel } from './models/book.model';
import { BookService } from './book.service';
import {BookResolver} from './book.resolver';

import {AuthorModule} from '../author'

@Module({
  imports: [
    AuthorModule,
    TypeOrmModule.forFeature([BookModel]),
  ],
  providers: [
    BookService,BookResolver
  ],
})
export class BookModule {}