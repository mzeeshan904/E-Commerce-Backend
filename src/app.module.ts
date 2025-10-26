import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './config/validation.schema';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import authConfig from './config/auth.config';
import redisConfig from './config/redis.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // Make config available globally
      isGlobal: true,

      // Environment file loading (first match wins)
      envFilePath: [
        `.env.${process.env.NODE_ENV}.local`, // Highest priority
        `.env.${process.env.NODE_ENV}`, // Environment-specific
        '.env.local', // Local overrides
        '.env', // Default
      ],

      // Load namespaced configurations
      load: [appConfig, databaseConfig, authConfig, redisConfig],

      // Validation
      validationSchema,
      validationOptions: {
        allowUnknown: true, // Allow extra env variables
        abortEarly: false, // Show all validation errors
      },

      // Performance & Features
      cache: true, // Cache env variables
      expandVariables: true, // Support ${VAR} syntax

      // Ignore .env file in production (use system env vars)
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
  ],
})
export class AppModule {}
