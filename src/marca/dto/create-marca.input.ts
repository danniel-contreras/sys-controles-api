import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMarcaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
