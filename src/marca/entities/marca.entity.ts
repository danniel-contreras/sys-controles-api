import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("Marca", { synchronize: false })
export class Marca {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id_marca: number;

  @Field(() => String)
  @Column({ type: "varchar" })
  nombre: string;

  @Field(() => Boolean)
  @Column({ type: "bit" })
  estado: boolean;
}
