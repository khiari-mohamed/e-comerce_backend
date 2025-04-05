import { Test, TestingModule } from '@nestjs/testing';
import { PromoCodesController } from './promo-code.controller';

describe('PromoCodeController', () => {
  let controller: PromoCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromoCodesController],
    }).compile();

    controller = module.get<PromoCodesController>(PromoCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
