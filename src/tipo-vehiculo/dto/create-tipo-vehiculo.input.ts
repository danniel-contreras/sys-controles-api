import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTipoVehiculoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
