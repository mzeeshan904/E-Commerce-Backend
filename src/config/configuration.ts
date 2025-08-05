export default () => {
  const {
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_NAME,
  } = process.env;

  const DATABASE_URL = `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

  return {
    port: parseInt(process.env.PORT || '3000', 10),
    database: {
      user: DATABASE_USER,
      password: DATABASE_PASSWORD,
      host: DATABASE_HOST,
      port: parseInt(DATABASE_PORT || '5432', 10),
      name: DATABASE_NAME,
      url: DATABASE_URL,
    },
  };
};
