import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasTransporteService } from './empresas-transporte.service';

describe('EmpresasTransporteService', () => {
  let service: EmpresasTransporteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresasTransporteService],
    }).compile();

    service = module.get<EmpresasTransporteService>(EmpresasTransporteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
