import { ChannelTypeEnum } from '@novu/shared';
import { ShortlinkSmsProvider } from '@novu/shortlink';
import { ICredentials } from '@novu/dal';
import { BaseSmsHandler } from './base.handler';

export class ShortlinkSmsHandler extends BaseSmsHandler {
  constructor() {
    super('shortlink', ChannelTypeEnum.SMS);
  }
  buildProvider(credentials: ICredentials) {
    this.provider = new ShortlinkSmsProvider({
      authKey: credentials.accountSid,
      authToken: credentials.token,
      from: credentials.from,
    });
  }
}
