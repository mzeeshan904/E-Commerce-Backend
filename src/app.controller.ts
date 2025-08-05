import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('db-status')
  async getDatabaseStatus() {
    try {
      // Test database connection
      await this.prismaService.$queryRaw`SELECT 1`;
      return {
        status: 'Database connected successfully',
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error';
      return {
        status: 'Database connection failed',
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };
    }
  }
}
