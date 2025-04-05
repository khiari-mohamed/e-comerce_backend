import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PacksController } from './packs.controller';
import { PacksService } from './packs.service';
import { Pack, PackSchema } from '../models/pack';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pack.name, schema: PackSchema }]),
    MulterModule.register({
      storage: memoryStorage(),
      limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit like original
    }),
  ],
  controllers: [PacksController],
  providers: [PacksService],
})
export class PacksModule {}