import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaResolver } from './marca.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Marca])],
  providers: [MarcaResolver, MarcaService],
  exports:[MarcaService]
})
export class MarcaModule {}
