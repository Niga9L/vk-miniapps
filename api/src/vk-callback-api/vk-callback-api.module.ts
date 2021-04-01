import { Module } from '@nestjs/common';
import { VkCallbackApiController } from './vk-callback-api.controller';
import { VkCallbackApiService } from './vk-callback-api.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [VkCallbackApiController],
  providers: [VkCallbackApiService, ConfigService],
})
export class VkCallbackApiModule {}
