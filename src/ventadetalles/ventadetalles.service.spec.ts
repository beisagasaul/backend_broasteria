import { Test, TestingModule } from '@nestjs/testing';
import { VentadetallesService } from './ventadetalles.service';

describe('VentadetallesService', () => {
  let service: VentadetallesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VentadetallesService],
    }).compile();

    service = module.get<VentadetallesService>(VentadetallesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
