import { Query, Resolver, ResolveField, Args, Int, Parent, Mutation } from '@nestjs/graphql';

import { BookModel } from './models/book.model';
import { CreateInputBook } from './input/create.input';
import { AuthorModel } from '../author/models/author.model';
import { BookService } from './book.service';

@Resolver(of => BookModel)
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
  ) {
  }

  @Query(() => BookModel)
  book(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.bookService.getBook(id);
  }

  @Query(() => [BookModel])
  books() {
    return this.bookService.findAll({ relations: ['author'] });
  }

  @Mutation(() => BookModel)
  createBook(@Args('data')data: CreateInputBook) {
    return this.bookService.createBook(data);
  }

  @ResolveField(() => AuthorModel)
  author(@Parent() book: BookModel) {
    const { author } = book;
    return author;
  }

}
