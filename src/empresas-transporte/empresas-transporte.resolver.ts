import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { EmpresasTransporteService } from "./empresas-transporte.service";
import { EmpresasTransporte } from "./entities/empresas-transporte.entity";
import { CreateEmpresasTransporteInput } from "./dto/create-empresas-transporte.input";
import { UpdateEmpresasTransporteInput } from "./dto/update-empresas-transporte.input";
import { GetEmpresasTransporte } from "./dto/get-empresas-transporte.types";

@Resolver(() => EmpresasTransporte)
export class EmpresasTransporteResolver {
  constructor(
    private readonly empresasTransporteService: EmpresasTransporteService
  ) {}

  @Query(() => GetEmpresasTransporte, { name: "obtenerEmpresasTransporte" })
  async getEmpresasTransporte() {
    return await this.empresasTransporteService.getEmpresasTransporte();
  }
}
