import { Module } from "@nestjs/common";
import { TipoCombustibleService } from "./tipo-combustible.service";
import { TipoCombustibleResolver } from "./tipo-combustible.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TipoCombustible } from "./entities/tipo-combustible.entity";

@Module({
  imports: [TypeOrmModule.forFeature([TipoCombustible])],
  providers: [TipoCombustibleResolver, TipoCombustibleService],
  exports:[TipoCombustibleService]
})
export class TipoCombustibleModule {}
