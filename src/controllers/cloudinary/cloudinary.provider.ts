import { v2 as cloudinary } from 'cloudinary';
import { ConfigService } from '@nestjs/config';
import { Provider } from '@nestjs/common';

export const CloudinaryProvider: Provider = {
  provide: 'CLOUDINARY',
  useFactory: async (configService: ConfigService) => {
    const cloudinaryUrl = configService.get<string>('CLOUDINARY_URL');
    if (!cloudinaryUrl) throw new Error('CLOUDINARY_URL not found in env');

    cloudinary.config({
      cloudinary_url: cloudinaryUrl,
    });

    return cloudinary;
  },
  inject: [ConfigService],
};
