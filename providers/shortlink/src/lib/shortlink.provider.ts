import {
  ChannelTypeEnum,
  ISendMessageSuccessResponse,
  ISmsOptions,
  ISmsProvider,
} from '@novu/stateless';

import axios from 'axios';

export class ShortlinkSmsProvider implements ISmsProvider {
  id = 'shortlink';
  channelType = ChannelTypeEnum.SMS as ChannelTypeEnum.SMS;

  constructor(
    private config: {
      from?: string;
      authKey: string;
      authToken: string;
    }
  ) {}

  async sendMessage(
    options: ISmsOptions
  ): Promise<ISendMessageSuccessResponse> {
    const url = 'https://app.shortlink.pro/api/v1/sms/send';
    const data = {
      messages: [
        {
          messageId: options.id,
          ...(options.from && { from: options.from }),
          to: [
            {
              phone: options.to,
            },
          ],
          content: options.content,
        },
      ],
    };

    const response = await axios.request({
      headers: {
        'x-shortlink-apikey': this.config.authKey,
        'x-shortlink-apitoken': this.config.authToken,
      },
      data,
      method: 'post',
      url,
    });

    return {
      id: response.data?.data.messages[0].messageId,
      date: new Date().toISOString(),
    };
  }
}
