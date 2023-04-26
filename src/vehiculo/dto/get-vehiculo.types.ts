import { Marca } from "src/marca/entities/marca.entity";
import { Vehiculo } from "../entities/vehiculo.entity";
import { TipoCombustible } from "src/tipo-combustible/entities/tipo-combustible.entity";
import { Field, ObjectType } from "@nestjs/graphql";
import { TipoVehiculo } from "src/tipo-vehiculo/entities/tipo-vehiculo.entity";
import { EmpresasTransporte } from "src/empresas-transporte/entities/empresas-transporte.entity";

@ObjectType()
export class GetVehiculo {
  @Field(() => Boolean)
  ok: boolean;
  @Field(() => String)
  message: string;
  @Field(() => [OnlyVehicle])
  vehiculos: Array<OnlyVehicle>;
}

@ObjectType()
export class OnlyVehicle extends Vehiculo {
  @Field(() => Marca)
  marca: Marca;

  @Field(() => TipoCombustible)
  tipo_combustible: TipoCombustible;

  @Field(() => TipoVehiculo)
  tipo_vehiculo: TipoVehiculo;

  @Field(() => EmpresasTransporte)
  empresa_transporte: EmpresasTransporte;
}
