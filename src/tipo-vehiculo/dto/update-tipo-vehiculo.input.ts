import { CreateTipoVehiculoInput } from './create-tipo-vehiculo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTipoVehiculoInput extends PartialType(CreateTipoVehiculoInput) {
  @Field(() => Int)
  id: number;
}
