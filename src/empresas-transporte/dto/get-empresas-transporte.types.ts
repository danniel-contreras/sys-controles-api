import { Field, ObjectType } from "@nestjs/graphql";
import { EmpresasTransporte } from "../entities/empresas-transporte.entity";

@ObjectType()
export class GetEmpresasTransporte {
  @Field(() => Boolean)
  ok: boolean;

  @Field(() => String)
  message: string;

  @Field(() => [EmpresasTransporte], { nullable: true })
  empresasTransporte: [EmpresasTransporte];
}
