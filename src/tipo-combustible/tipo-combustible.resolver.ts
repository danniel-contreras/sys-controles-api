import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { TipoCombustibleService } from "./tipo-combustible.service";
import { TipoCombustible } from "./entities/tipo-combustible.entity";
import { GetTipoCombustible } from "./dto/get-tipo-combustible.types";

@Resolver(() => TipoCombustible)
export class TipoCombustibleResolver {
  constructor(
    private readonly tipoCombustibleService: TipoCombustibleService
  ) {}

  @Query(() => GetTipoCombustible, { name: "obtenerTiposCombustible" })
  async getTiposCombustible() {
    return await this.tipoCombustibleService.getTiposCombustible();
  }
}
