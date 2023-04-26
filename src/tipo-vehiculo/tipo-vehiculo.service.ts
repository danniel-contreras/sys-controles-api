import { Injectable } from "@nestjs/common";
import { CreateTipoVehiculoInput } from "./dto/create-tipo-vehiculo.input";
import { UpdateTipoVehiculoInput } from "./dto/update-tipo-vehiculo.input";
import { InjectRepository } from "@nestjs/typeorm";
import { TipoVehiculo } from "./entities/tipo-vehiculo.entity";
import { Repository } from "typeorm";

@Injectable()
export class TipoVehiculoService {
  constructor(
    @InjectRepository(TipoVehiculo)
    private _tipoVehiculo: Repository<TipoVehiculo>
  ) {}

  async findAll() {
    const result = await this._tipoVehiculo.find();
    if (result.length > 0) {
      return {
        ok: true,
        message: "Tipoa de vehiculo encontrado",
        tipos: [...result],
      };
    }
    return {
      ok: false,
      message: "No se encontraron tipos de vehiculos",
      tipos: undefined,
    };
  }

  async getTipoVehiculo(id: number) {
    return await this._tipoVehiculo.findOne({
      where: { id_tipo_vehiculo: id },
    });
  }
}
