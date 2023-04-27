export default () => ({
  JWT_SECRET: process.env.JWT_SECRET,
  port: parseInt(process.env.PORT) || 3001,
  db: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT) || 5432,
    username: process.env.POSTGRES_USER || 'student',
    password: process.env.POSTGRES_PASSWORD || '152637',
    database: process.env.POSTGRES_DB || 'kupipodariday',
  },
});
