import { Field, ObjectType } from "@nestjs/graphql";
import { TipoCombustible } from "../entities/tipo-combustible.entity";

@ObjectType()
export class GetTipoCombustible {
  @Field(() => Boolean)
  ok: boolean;

  @Field(() => String)
  message: string;

  @Field(() => [TipoCombustible], { nullable: true })
  tipos: [TipoCombustible];
}
