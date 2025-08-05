# E-Commerce Backend API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

A comprehensive e-commerce backend API built with NestJS, Prisma, and PostgreSQL. Features a complete product catalog, user management, order processing, inventory tracking, and more.

## 🚀 Features

- **Complete E-commerce Domain**: Users, Products, Orders, Payments, Inventory
- **Advanced Product Management**: Variants, attributes, categories, brands
- **Order Processing**: Full order lifecycle with status tracking
- **Inventory Management**: Stock tracking, movements, alerts
- **Multi-currency Support**: Flexible pricing system
- **Review System**: Product reviews with moderation
- **Analytics & Reporting**: Purchase analytics and audit trails
- **GDPR Compliance**: User consent management
- **Subscription Management**: Recurring billing support
- **Return & Refund System**: Complete return processing

## 🛠 Technology Stack

- **Framework**: NestJS (Node.js)
- **Database**: PostgreSQL with Prisma ORM
- **Configuration**: Environment-based with validation
- **Documentation**: Swagger/OpenAPI
- **Language**: TypeScript

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL database
- npm or yarn

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd e-commerce-backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create `.env.development` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=3000

   DATABASE_HOST=localhost
   DATABASE_PORT=5432
   DATABASE_USER=postgres
   DATABASE_PASSWORD=your_password
   DATABASE_NAME=ecommerce_backend_db
   ```

4. **Database Setup**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Run database migrations
   npm run db:migrate
   ```

## 🏃‍♂️ Running the Application

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# Debug mode
npm run start:debug
```

The API will be available at:
- **API**: http://localhost:3000
- **Documentation**: http://localhost:3000/api
- **Database Status**: http://localhost:3000/db-status

## 🗄️ Database Commands

```bash
# Run migrations
npm run db:migrate

# Generate Prisma client
npm run db:generate

# Open Prisma Studio
npm run db:studio

# Reset database
npm run db:reset
```

## 🏗️ Architecture

### Configuration Management
- Environment-specific configuration via `.env.development`
- Centralized config module with validation using Joi
- Type-safe configuration access throughout the application

### Database Integration
- Custom PrismaService integrated with NestJS ConfigModule
- No direct `.env` file dependency for Prisma
- Smart environment variable handling for CLI commands

### Project Structure
```
src/
├── config/           # Configuration management
│   ├── configuration.ts
│   └── validation.ts
├── database/         # Database module and service
│   ├── database.module.ts
│   └── prisma.service.ts
├── app.controller.ts # Main application controller
├── app.module.ts     # Root application module
├── app.service.ts    # Main application service
└── main.ts          # Application entry point

prisma/
├── schema.prisma    # Database schema
└── migrations/      # Database migrations

scripts/
└── prisma-with-env.js # Prisma CLI environment helper
```

## 📊 Database Schema

The application includes a comprehensive e-commerce database schema with:

- **User Management**: Users, addresses, social accounts
- **Product Catalog**: Products, variants, categories, brands
- **Inventory**: Stock tracking, movements, alerts
- **Orders**: Order processing, items, status history
- **Payments**: Payment processing, refunds
- **Reviews**: Product reviews and ratings
- **Analytics**: Purchase analytics, page views
- **Audit**: Complete audit trail for all operations

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov

# Watch mode
npm run test:watch
```

## 🔍 API Documentation

Once the application is running, visit http://localhost:3000/api to explore the interactive API documentation powered by Swagger.

### Key Endpoints

- `GET /` - Health check
- `GET /db-status` - Database connection status
- `GET /api` - API documentation

## 🚀 Deployment

### Environment Variables

For production deployment, ensure these environment variables are set:

```env
NODE_ENV=production
PORT=3000
DATABASE_HOST=your_db_host
DATABASE_PORT=5432
DATABASE_USER=your_db_user
DATABASE_PASSWORD=your_db_password
DATABASE_NAME=your_db_name
```

### Build and Start

```bash
# Build the application
npm run build

# Start in production mode
npm run start:prod
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the [NestJS Documentation](https://docs.nestjs.com)
- Visit the [NestJS Discord](https://discord.gg/G7Qnnhy)

---

Built with ❤️ using [NestJS](https://nestjs.com/)