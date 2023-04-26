import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { VehiculoService } from "./vehiculo.service";
import { Vehiculo } from "./entities/vehiculo.entity";
import { CreateVehiculoInput } from "./dto/create-vehiculo.input";
import { UpdateVehiculoInput } from "./dto/update-vehiculo.input";
import { GetVehiculo } from "./dto/get-vehiculo.types";

@Resolver(() => Vehiculo)
export class VehiculoResolver {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Query(() => GetVehiculo, { name: "obtenerVehiculos" })
  async getVehiculo() {
    return await this.vehiculoService.getVehiculos();
  }
}
