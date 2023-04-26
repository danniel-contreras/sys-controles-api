import { CreateTipoCombustibleInput } from './create-tipo-combustible.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTipoCombustibleInput extends PartialType(CreateTipoCombustibleInput) {
  @Field(() => Int)
  id: number;
}
