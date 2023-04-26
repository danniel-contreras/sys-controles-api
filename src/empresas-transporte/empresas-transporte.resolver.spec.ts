import { Test, TestingModule } from '@nestjs/testing';
import { EmpresasTransporteResolver } from './empresas-transporte.resolver';
import { EmpresasTransporteService } from './empresas-transporte.service';

describe('EmpresasTransporteResolver', () => {
  let resolver: EmpresasTransporteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresasTransporteResolver, EmpresasTransporteService],
    }).compile();

    resolver = module.get<EmpresasTransporteResolver>(EmpresasTransporteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
