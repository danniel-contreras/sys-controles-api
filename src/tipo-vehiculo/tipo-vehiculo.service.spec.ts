import { Test, TestingModule } from '@nestjs/testing';
import { TipoVehiculoService } from './tipo-vehiculo.service';

describe('TipoVehiculoService', () => {
  let service: TipoVehiculoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoVehiculoService],
    }).compile();

    service = module.get<TipoVehiculoService>(TipoVehiculoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
