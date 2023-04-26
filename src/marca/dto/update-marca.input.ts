import { CreateMarcaInput } from './create-marca.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMarcaInput extends PartialType(CreateMarcaInput) {
  @Field(() => Int)
  id: number;
}
