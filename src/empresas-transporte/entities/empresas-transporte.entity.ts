import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("EmpresasTransporte", { synchronize: false })
export class EmpresasTransporte {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id_emp_transporte: number;

  @Field(()=>String)
  @Column({type:"varchar"})
  codigo_sap: string

  @Field(()=>String)
  @Column({type:"varchar"})
  nombre: string

  @Field(()=>String)
  @Column({type:"varchar"})
  contacto: string

  @Field(()=>String)
  @Column({type:"varchar"})
  telefono: string
  
  @Field(() => Boolean)
  @Column({ type: "bit" })
  estado: boolean;
}
