import { Module } from '@nestjs/common';
import { VkCallbackApiModule } from './vk-callback-api/vk-callback-api.module';
import * as Joi from 'joi';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        PORT: Joi.number(),
      }),
    }),
    DatabaseModule,
    VkCallbackApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
