import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { AuthorModel } from '../../author/models/author.model';

@ObjectType()
@Entity('books')
export class BookModel {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar', { length: 500 })
  name: string;

  @Field(() => Int)
  @Column('int')
  pageCount: number;

  @Field(() => Int)
  @Column('int')
  authorId: number;

  @Field(() => AuthorModel)
  @ManyToOne(type => AuthorModel, author => author.books)
  author: AuthorModel;
}