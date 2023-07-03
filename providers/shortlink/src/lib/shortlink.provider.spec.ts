import { ShortlinkSmsProvider } from './shortlink.provider';
test('should trigger clickatellSmsProvider library correctly', async () => {
  const provider = new ShortlinkSmsProvider({
    authKey: '<shortlink-auth-key>',
    authToken: '<shortlink-auth-token>',
  });

  const spy = jest
    .spyOn(provider, 'sendMessage')
    .mockImplementation(async () => {
      return {
        id: '853fb8f5-1d02-4972-8cc0-cf190105e699',
        date: new Date().toISOString(),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any;
    });

  await provider.sendMessage({
    to: '+212661740576',
    content: 'Test',
  });

  expect(spy).toHaveBeenCalled();

  expect(spy).toHaveBeenCalledWith({
    to: '+212661740576',
    content: 'Test',
  });
});
