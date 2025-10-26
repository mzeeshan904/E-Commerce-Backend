import { registerAs } from '@nestjs/config';

export default registerAs('app', () => {
  const rawPort = process.env.PORT ?? '';            // never undefined
  const port = Number.parseInt(rawPort, 10);
  const cors = (process.env.CORS_ORIGIN ?? '')
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);

  const env = process.env.NODE_ENV ?? 'development';

  return {
    env,
    port: Number.isNaN(port) ? 3000 : port,
    apiPrefix: process.env.API_PREFIX ?? 'api',
    corsOrigin: cors as string[],
    isDevelopment: env === 'development',
    isProduction: env === 'production',
    isTest: env === 'test',
  };
});
