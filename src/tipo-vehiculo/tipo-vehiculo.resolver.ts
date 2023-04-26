import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { TipoVehiculoService } from "./tipo-vehiculo.service";
import { TipoVehiculo } from "./entities/tipo-vehiculo.entity";
import { CreateTipoVehiculoInput } from "./dto/create-tipo-vehiculo.input";
import { UpdateTipoVehiculoInput } from "./dto/update-tipo-vehiculo.input";
import { GetTiposVehiculo } from "./dto/get-tipo-vehiculo.types";

@Resolver(() => TipoVehiculo)
export class TipoVehiculoResolver {
  constructor(private readonly tipoVehiculoService: TipoVehiculoService) {}

  @Query(() => GetTiposVehiculo, { name: "obtenerTiposVehiculo" })
  async GetTiposVehiculo() {
    return await this.tipoVehiculoService.findAll()
  }
}
