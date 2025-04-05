// products.module.ts (updated)
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsController } from "./product.controller";
import { ProductsService } from "./product.service";
import { Product, ProductSchema } from "../../models/product.schema";
import { Category, CategorySchema } from "../../models/category.schema";
import {
  SubCategory,
  SubCategorySchema,
} from "../../models/sub-category.schema";
import { CloudinaryProvider } from "../../controllers/cloudinary/cloudinary.provider";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: Category.name, schema: CategorySchema },
      { name: SubCategory.name, schema: SubCategorySchema },
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, CloudinaryProvider],
})
export class ProductsModule {}
