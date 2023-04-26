import { Field, ObjectType } from "@nestjs/graphql";
import { TipoVehiculo } from "../entities/tipo-vehiculo.entity";

@ObjectType()
export class GetTiposVehiculo {
  @Field(() => Boolean)
  ok: boolean;

  @Field(() => String)
  message: string;

  @Field(() => [TipoVehiculo], { nullable: true })
  tipos: [TipoVehiculo];
}
