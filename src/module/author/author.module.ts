import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { AuthorModel } from './models/author.model';

@Module({
  imports:[
    TypeOrmModule.forFeature([AuthorModel]),
  ],
  providers: [
    AuthorResolver,
    AuthorService,
  ],
  exports:[AuthorService]
})
export class AuthorModule {
}