import { Injectable } from "@nestjs/common";
import { CreateEmpresasTransporteInput } from "./dto/create-empresas-transporte.input";
import { UpdateEmpresasTransporteInput } from "./dto/update-empresas-transporte.input";
import { InjectRepository } from "@nestjs/typeorm";
import { EmpresasTransporte } from "./entities/empresas-transporte.entity";
import { Repository } from "typeorm";

@Injectable()
export class EmpresasTransporteService {
  constructor(
    @InjectRepository(EmpresasTransporte)
    private _empresaTransporte: Repository<EmpresasTransporte>
  ) {}

  async getEmpresasTransporte() {
    const result = await this._empresaTransporte.find();

    if (result.length > 0) {
      return {
        ok: true,
        message: "Empresas de transporte encontradas",
        empresasTransporte: [...result],
      };
    } else {
      return {
        ok: false,
        message: "No se encontraron empresas de transporte",
        empresasTransporte: undefined,
      };
    }
  }
  async GetEmpresaTransporte(id:number) {
    return await this._empresaTransporte.findOne({
      where: { id_emp_transporte: id },
    });
  }
}
