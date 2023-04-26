import { Test, TestingModule } from '@nestjs/testing';
import { TipoCombustibleResolver } from './tipo-combustible.resolver';
import { TipoCombustibleService } from './tipo-combustible.service';

describe('TipoCombustibleResolver', () => {
  let resolver: TipoCombustibleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipoCombustibleResolver, TipoCombustibleService],
    }).compile();

    resolver = module.get<TipoCombustibleResolver>(TipoCombustibleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
