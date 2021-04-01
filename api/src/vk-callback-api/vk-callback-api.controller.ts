import { Controller, Get, Header, HttpCode, Post } from '@nestjs/common';
import { VkCallbackApiService } from './vk-callback-api.service';

@Controller('/callback-vk')
export class VkCallbackApiController {
  constructor(private readonly _vkCallbackService: VkCallbackApiService) {}
  @Get()
  sendOk() {
    return 'ok';
  }

  @Post()
  @HttpCode(200)
  @Header('Content-Type', 'application/json')
  requestFromVK() {
    return this._vkCallbackService.sendConfirmAnswer();
  }
}
