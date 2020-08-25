import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../../common/services';
import { BookModel } from './models/book.model';
import { CreateInputBook } from './input/create.input';
import { AuthorService } from '../author/author.service';

@Injectable()
export class BookService extends BaseService {
  constructor(
    @InjectRepository(BookModel) private readonly bookRepository: Repository<BookModel>,
    private readonly authorService: AuthorService,
  ) {
    super(bookRepository);
  }

  async getBook(id: number): Promise<BookModel> {
    const res = await this.findOne({ where: { id }, relations: ['author'] });
    if (!res)
      throw new NotFoundException('Книга не найдена');

    return res;
  }

  async createBook(book: CreateInputBook): Promise<BookModel> {
    const findAuthor = await this.authorService.findOne({ where: { name: book.author } });

    if (!findAuthor)
      throw new NotFoundException('Автор не найден');

    return this.bookRepository.save({
      ...book,
      author: findAuthor,
    });

  }

}