import { Test, TestingModule } from '@nestjs/testing';
import { PromoCodesService } from './promo-code.service';

describe('PromoCodeService', () => {
  let service: PromoCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PromoCodesService],
    }).compile();

    service = module.get<PromoCodesService>(PromoCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
