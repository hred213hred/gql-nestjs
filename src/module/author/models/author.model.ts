import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

import { BookModel } from '../../book/models/book.model';

@ObjectType()
@Entity('authors')
export class AuthorModel {
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { length: 500 })
  name: string;

  @Field(() => [BookModel])
  @OneToMany(type => BookModel, book => book.author)
  books: BookModel[];
}