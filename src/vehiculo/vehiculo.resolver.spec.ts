import { Test, TestingModule } from '@nestjs/testing';
import { VehiculoResolver } from './vehiculo.resolver';
import { VehiculoService } from './vehiculo.service';

describe('VehiculoResolver', () => {
  let resolver: VehiculoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiculoResolver, VehiculoService],
    }).compile();

    resolver = module.get<VehiculoResolver>(VehiculoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
