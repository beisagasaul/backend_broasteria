import { Test, TestingModule } from '@nestjs/testing';
import { VentadetallesController } from './ventadetalles.controller';
import { VentadetallesService } from './ventadetalles.service';

describe('VentadetallesController', () => {
  let controller: VentadetallesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VentadetallesController],
      providers: [VentadetallesService],
    }).compile();

    controller = module.get<VentadetallesController>(VentadetallesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
