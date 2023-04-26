import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { MarcaService } from "./marca.service";
import { Marca } from "./entities/marca.entity";
import { CreateMarcaInput } from "./dto/create-marca.input";
import { UpdateMarcaInput } from "./dto/update-marca.input";
import { GetMarcas } from "./dto/get-marca.types";

@Resolver(() => Marca)
export class MarcaResolver {
  constructor(private readonly marcaService: MarcaService) {}
  @Query(() => GetMarcas, { name: "obetenerMarcas" })
  async getMarcas() {
    return this.marcaService.findAll();
  }
}
