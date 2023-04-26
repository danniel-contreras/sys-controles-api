import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("TipoVehiculo")
export class TipoVehiculo {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id_tipo_vehiculo: number;

  @Field(() => String)
  @Column({ type: "varchar" })
  descripcion: string;

  @Field(() => Boolean)
  @Column({ type: "bit" })
  estado: boolean;
}
