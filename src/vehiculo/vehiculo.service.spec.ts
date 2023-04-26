import { Test, TestingModule } from '@nestjs/testing';
import { VehiculoService } from './vehiculo.service';

describe('VehiculoService', () => {
  let service: VehiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehiculoService],
    }).compile();

    service = module.get<VehiculoService>(VehiculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
