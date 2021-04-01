import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class VkCallbackApiService {
  constructor(private readonly _configService: ConfigService) {}

  public sendConfirmAnswer(): string {
    return this._configService.get('CONFIRM_ANSWER_VK');
  }
}
