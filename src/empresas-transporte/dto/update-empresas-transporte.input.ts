import { CreateEmpresasTransporteInput } from './create-empresas-transporte.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmpresasTransporteInput extends PartialType(CreateEmpresasTransporteInput) {
  @Field(() => Int)
  id: number;
}
