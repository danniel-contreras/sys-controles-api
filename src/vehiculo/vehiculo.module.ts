import { Module, forwardRef } from "@nestjs/common";
import { VehiculoService } from "./vehiculo.service";
import { VehiculoResolver } from "./vehiculo.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Vehiculo } from "./entities/vehiculo.entity";
import { MarcaModule } from "src/marca/marca.module";
import { TipoCombustibleModule } from "src/tipo-combustible/tipo-combustible.module";
import { TipoVehiculoModule } from "src/tipo-vehiculo/tipo-vehiculo.module";
import { EmpresasTransporteModule } from "src/empresas-transporte/empresas-transporte.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehiculo]),
    forwardRef(() => MarcaModule),
    forwardRef(() => TipoCombustibleModule),
    forwardRef(() => TipoVehiculoModule),
    forwardRef(() => EmpresasTransporteModule),
  ],
  providers: [VehiculoResolver, VehiculoService],
})
export class VehiculoModule {}
