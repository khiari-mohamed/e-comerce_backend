import { Test, TestingModule } from "@nestjs/testing";
import { VentesService } from "./vente.service";

describe("VenteService", () => {
  let service: VentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VentesService],
    }).compile();

    service = module.get<VentesService>(VentesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
