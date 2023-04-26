import { Injectable } from "@nestjs/common";
import { CreateMarcaInput } from "./dto/create-marca.input";
import { UpdateMarcaInput } from "./dto/update-marca.input";
import { InjectRepository } from "@nestjs/typeorm";
import { Marca } from "./entities/marca.entity";
import { Repository } from "typeorm";

@Injectable()
export class MarcaService {
  constructor(
    @InjectRepository(Marca)
    private _marca: Repository<Marca>
  ) {}
  async findAll() {
    const result = await this._marca.find();
    if (result.length > 0) {
      return {
        ok: true,
        message: "Marcas encontradas",
        marcas: [...result],
      };
    }
    return {
      ok: false,
      message: "No se encontraron marcas",
    };
  }
  async getMarca(id: number) {
    return await this._marca.findOne({ where: { id_marca: id } });
  }
}
