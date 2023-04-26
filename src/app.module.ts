import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { ApolloDriver } from "@nestjs/apollo";
import { GraphQLModule } from "@nestjs/graphql";
import { AuthModule } from "./auth/auth.module";
import { Usuario } from "./auth/entities/auth.entity";
import { UserTypeModule } from './user_type/user_type.module';
import { UserType } from "./user_type/entities/user_type.entity";
import { TipoCombustibleModule } from './tipo-combustible/tipo-combustible.module';
import { TipoVehiculoModule } from './tipo-vehiculo/tipo-vehiculo.module';
import { MarcaModule } from './marca/marca.module';
import { TipoVehiculo } from "./tipo-vehiculo/entities/tipo-vehiculo.entity";
import { Marca } from "./marca/entities/marca.entity";
import { EmpresasTransporteModule } from './empresas-transporte/empresas-transporte.module';
import { EmpresasTransporte } from "./empresas-transporte/entities/empresas-transporte.entity";
import { TipoCombustible } from "./tipo-combustible/entities/tipo-combustible.entity";
import { VehiculoModule } from './vehiculo/vehiculo.module';
import { Vehiculo } from "./vehiculo/entities/vehiculo.entity";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
      driver: ApolloDriver,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: "mssql",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 1433,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [Usuario,UserType,TipoVehiculo,Marca,EmpresasTransporte,TipoCombustible,Vehiculo],
        synchronize: false,
        options: { encrypt: false },
      }),
    }),
    ConfigModule.forRoot(),
    AuthModule,
    UserTypeModule,
    TipoCombustibleModule,
    TipoVehiculoModule,
    MarcaModule,
    EmpresasTransporteModule,
    VehiculoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
