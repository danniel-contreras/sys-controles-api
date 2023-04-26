import { Module } from '@nestjs/common';
import { TipoVehiculoService } from './tipo-vehiculo.service';
import { TipoVehiculoResolver } from './tipo-vehiculo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoVehiculo } from './entities/tipo-vehiculo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([TipoVehiculo])],
  providers: [TipoVehiculoResolver, TipoVehiculoService],
  exports:[TipoVehiculoService]
})
export class TipoVehiculoModule {}
