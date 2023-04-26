import { ObjectType, Field, Int, Float } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("Vehiculo", { synchronize: false })
export class Vehiculo {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id_vehiculo: number;

  @Field(() => Int, { nullable: true })
  @Column({ type: "int" })
  id_emp_transporte: number;

  @Field(() => Int)
  @Column({ type: "int" })
  id_marca: number;

  @Field(() => Int)
  @Column({ type: "int" })
  id_tipovehiculo: number;

  @Field(() => Int)
  @Column({ type: "int" })
  numero: number;

  @Field(() => Int)
  @Column({ type: "int" })
  annio: number;

  @Field(() => String)
  @Column({ type: "varchar" })
  placa: string;

  @Field(() => String, { nullable: true })
  @Column({ type: "varchar" })
  tonelaje: string;

  @Field(() => String, { nullable: true })
  @Column({ type: "varchar" })
  poliza_seguro: string;

  @Field(() => Float, { nullable: true })
  @Column({ type: "decimal", precision: 19, scale: 4 })
  rendimiento: number;

  @Field(() => Float, { nullable: true })
  @Column({ type: "decimal", precision: 19, scale: 4 })
  valor_depreciacion: number;

  @Field(() => Int)
  @Column({ type: "int" })
  id_tipo_combustible: number;

  @Field(() => Boolean)
  @Column({ type: "bit" })
  estado: boolean;
}
