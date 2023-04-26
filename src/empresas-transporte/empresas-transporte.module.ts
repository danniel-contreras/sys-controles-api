import { Module } from '@nestjs/common';
import { EmpresasTransporteService } from './empresas-transporte.service';
import { EmpresasTransporteResolver } from './empresas-transporte.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpresasTransporte } from './entities/empresas-transporte.entity';

@Module({
  imports:[TypeOrmModule.forFeature([EmpresasTransporte])],
  providers: [EmpresasTransporteResolver, EmpresasTransporteService],
  exports:[EmpresasTransporteService]
})
export class EmpresasTransporteModule {}
