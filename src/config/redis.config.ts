import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => {
  const rawPort = process.env.REDIS_PORT ?? '';
  const port = Number.parseInt(rawPort, 10);

  return {
    host: process.env.REDIS_HOST ?? 'localhost',
    port: Number.isNaN(port) ? 6379 : port,
    password: process.env.REDIS_PASSWORD || undefined,
    ttl: 3600,
  };
});
