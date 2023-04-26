import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmpresasTransporteInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
