import { Test, TestingModule } from '@nestjs/testing';
import { TipoVehiculoResolver } from './tipo-vehiculo.resolver';
import { TipoVehiculoService } from './tipo-vehiculo.service';

describe('TipoVehiculoResolver', () => {
  let resolver: TipoVehiculoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoVehiculoResolver, TipoVehiculoService],
    }).compile();

    resolver = module.get<TipoVehiculoResolver>(TipoVehiculoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
