import { Controller, Get } from '@nestjs/common';
import { VkCallbackApiService } from './vk-callback-api.service';

@Controller('/callback-vk')
export class VkCallbackApiController {
  constructor(private readonly _vkCallbackService: VkCallbackApiService) {}
  @Get()
  sendOk() {
    return this._vkCallbackService.sendConfirmAnswer();
  }
}
