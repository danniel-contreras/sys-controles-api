import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("TipoCombustible")
export class TipoCombustible {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id_tipo_combustible: number;

  @Field(() => String)
  @Column({ type: "varchar" })
  descripcion: string;
}
