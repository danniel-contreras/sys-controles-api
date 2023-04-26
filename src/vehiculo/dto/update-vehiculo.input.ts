import { CreateVehiculoInput } from './create-vehiculo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVehiculoInput extends PartialType(CreateVehiculoInput) {
  @Field(() => Int)
  id: number;
}
