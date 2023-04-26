import { Test, TestingModule } from '@nestjs/testing';
import { TipoCombustibleService } from './tipo-combustible.service';

describe('TipoCombustibleService', () => {
  let service: TipoCombustibleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoCombustibleService],
    }).compile();

    service = module.get<TipoCombustibleService>(TipoCombustibleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
