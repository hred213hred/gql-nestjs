import { InputType, Field } from '@nestjs/graphql';


@InputType()
export class CreateInputBook {
  @Field() name: string;
  @Field() pageCount: number;
  @Field() author: string;
}