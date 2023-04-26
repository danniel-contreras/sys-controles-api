import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTipoCombustibleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
