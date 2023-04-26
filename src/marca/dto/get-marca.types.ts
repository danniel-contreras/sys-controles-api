import { Field, ObjectType } from "@nestjs/graphql";
import { Marca } from "../entities/marca.entity";

@ObjectType()
export class GetMarcas {
  @Field(() => Boolean)
  ok: boolean;

  @Field(() => String)
  message: string;

  @Field(() => [Marca], { nullable: true })
  marcas: [Marca];
}
