import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Vehiculo } from "./entities/vehiculo.entity";
import { MarcaService } from "src/marca/marca.service";
import { TipoCombustibleService } from "src/tipo-combustible/tipo-combustible.service";
import { TipoVehiculo } from "src/tipo-vehiculo/entities/tipo-vehiculo.entity";
import { EmpresasTransporteService } from "src/empresas-transporte/empresas-transporte.service";
import { TipoVehiculoService } from "src/tipo-vehiculo/tipo-vehiculo.service";

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(Vehiculo)
    private _vehiculo: Repository<Vehiculo>,

    private marcaService: MarcaService,
    private tipoCombustibleService: TipoCombustibleService,
    private tipoVehiculoService: TipoVehiculoService,
    private empresaTransporteService: EmpresasTransporteService
  ) {}

  async getVehiculos() {
    const result = await this._vehiculo.find();

    const vehiculos = result.map(async (vh) => {
      return {
        ...vh,
        marca: await this.marcaService.getMarca(vh.id_marca),
        tipo_combustible: await this.tipoCombustibleService.getTipoCombustible(
          vh.id_tipo_combustible
        ),
        tipo_vehiculo: await this.tipoVehiculoService.getTipoVehiculo(
          vh.id_tipovehiculo
        ),
        empresa_transporte: await this.empresaTransporteService.GetEmpresaTransporte(
          vh.id_emp_transporte
        ),
      };
    });

    return {
      ok: true,
      message: "Vehiculos encontrados",
      vehiculos: [...vehiculos],
    };
  }
}
