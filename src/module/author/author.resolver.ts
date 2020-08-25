import { Query, Resolver, Args, Int, Mutation } from '@nestjs/graphql';

import { AuthorModel } from './models/author.model';
import { AuthorInput } from './input/author.input';
import { AuthorService } from './author.service';

@Resolver(of => AuthorModel)
export class AuthorResolver {
  constructor(private readonly authorService: AuthorService) {}

  @Query(() => [AuthorModel])
  authors() {
    return this.authorService.getAuthors();
  }

  @Query(() => AuthorModel)
  author(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.authorService.getAuthor(id);
  }

  @Mutation(() => AuthorModel)
  createAuthor(@Args('data')data: AuthorInput) {
    return this.authorService.createAuthor(data)
  }




}
