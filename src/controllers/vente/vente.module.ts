import { Module } from "@nestjs/common";
import { VentesController } from "./vente.controller";
import { VentesService } from "./vente.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Vente, VenteSchema } from "../../models/vente.schema";
import { Client, ClientSchema } from "../../models/client.schema";
import { PromoCode, PromoCodeSchema } from "../../models/promo-code.schema";
import { Product, ProductSchema } from "../../models/product.schema";
import { Pack, PackSchema } from "../../models/pack.schema";
import {
  Information,
  InformationSchema,
} from "../../models/information.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vente.name, schema: VenteSchema },
      { name: Client.name, schema: ClientSchema },
      { name: PromoCode.name, schema: PromoCodeSchema },
      { name: Product.name, schema: ProductSchema },
      { name: Pack.name, schema: PackSchema },
      { name: Information.name, schema: InformationSchema },
    ]),
  ],
  controllers: [VentesController],
  providers: [VentesService],
  exports: [VentesService],
})
export class VentesModule {}
