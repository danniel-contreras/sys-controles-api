import { Injectable } from "@nestjs/common";
import { CreateTipoCombustibleInput } from "./dto/create-tipo-combustible.input";
import { UpdateTipoCombustibleInput } from "./dto/update-tipo-combustible.input";
import { InjectRepository } from "@nestjs/typeorm";
import { TipoCombustible } from "./entities/tipo-combustible.entity";
import { Repository } from "typeorm";

@Injectable()
export class TipoCombustibleService {
  constructor(
    @InjectRepository(TipoCombustible)
    private _tipoCombustible: Repository<TipoCombustible>
  ) {}

  async getTiposCombustible() {
    const result = await this._tipoCombustible.find();
    if (result.length > 0) {
      return {
        ok: true,
        message: "Se encontraron tipos de combustible",
        tipos: [...result],
      };
    }
    return {
      ok: false,
      message: "No se encontraron tipos de combustible",
      tipos: undefined,
    };
  }

  async getTipoCombustible(id:number) {
    return await this._tipoCombustible.findOne({
      where: { id_tipo_combustible: id },
    });
  }
}
