// src/config/database.config.ts
import { registerAs } from '@nestjs/config';

function fromUrl(dsn?: string) {
  if (!dsn) return {};
  try {
    const u = new URL(dsn);
    // protocol like "postgresql:"
    const type = u.protocol.replace(':', ''); // "postgresql"
    const username = decodeURIComponent(u.username || '');
    const password = decodeURIComponent(u.password || '');
    const host = u.hostname;
    const port = u.port ? parseInt(u.port, 10) : undefined;
    const database = (u.pathname || '').replace(/^\//, '') || undefined;
    return {
      type: type === 'postgresql' ? 'postgres' : (type as 'postgres'|'mysql'|'mongodb'),
      host,
      port,
      username,
      password,
      database,
      url: dsn,
    };
  } catch {
    return {};
  }
}

export default registerAs('database', () => {
  const fromDsn = fromUrl(process.env.DATABASE_URL);

  // Prefer explicit env if present; otherwise use parsed DSN
  const type = (process.env.DATABASE_TYPE as 'postgres'|'mysql'|'mongodb') ?? (fromDsn.type as any);
  const port = process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT, 10) : fromDsn.port;

  return {
    type,
    host: process.env.DATABASE_HOST ?? fromDsn.host,
    port: port ?? 5432,
    username: process.env.DATABASE_USERNAME ?? fromDsn.username,
    password: process.env.DATABASE_PASSWORD ?? fromDsn.password,
    database: process.env.DATABASE_NAME ?? fromDsn.database,
    synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    logging: process.env.DATABASE_LOGGING === 'true',
    url: process.env.DATABASE_URL ?? fromDsn.url,
  };
});
