import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("TipoUser")
export class UserType {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id_tipouser: number;

  @Column({ type: "varchar" })
  @Field(() => String)
  descripcion: string;

  @Column({ type: "bit" })
  @Field(() => Boolean)
  estado: boolean;
}
