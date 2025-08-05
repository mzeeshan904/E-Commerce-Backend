# 🚀 Quick Start Guide

## 📋 Prerequisites Checklist

Before starting development, ensure you have:

- [ ] **Node.js 18+** installed
- [ ] **PostgreSQL 15+** running
- [ ] **Git** configured
- [ ] **VS Code** or preferred IDE
- [ ] **Docker** (optional, for containerized development)

## ⚡ 5-Minute Setup

```bash
# 1. Clone and install
git clone <repository-url>
cd e-commerce-backend
npm install

# 2. Environment setup
cp .env.example .env.development
# Edit .env.development with your database credentials

# 3. Database setup
npm run db:migrate
npm run db:generate

# 4. Start development
npm run start:dev
```

## 🎯 Development Commands

### Essential Commands
```bash
# Development
npm run start:dev          # Start with hot reload
npm run start:debug        # Start with debugger

# Database
npm run db:migrate         # Run migrations
npm run db:generate        # Generate Prisma client
npm run db:studio          # Open Prisma Studio
npm run db:reset           # Reset database

# Testing
npm run test               # Unit tests
npm run test:watch         # Watch mode
npm run test:cov           # With coverage
npm run test:e2e           # End-to-end tests

# Code Quality
npm run lint               # ESLint check
npm run lint:fix           # Fix linting issues
npm run format             # Format code
```

## 📊 Project Structure

```
e-commerce-backend/
├── src/
│   ├── app.module.ts          # Root module
│   ├── main.ts                # Application entry point
│   ├── config/                # Configuration management
│   ├── database/              # Database service and module
│   ├── modules/               # Feature modules
│   │   ├── auth/              # Authentication
│   │   ├── users/             # User management
│   │   ├── products/          # Product catalog
│   │   ├── orders/            # Order processing
│   │   ├── payments/          # Payment system
│   │   └── vendors/           # Marketplace features
│   ├── common/                # Shared utilities
│   │   ├── decorators/        # Custom decorators
│   │   ├── filters/           # Exception filters
│   │   ├── guards/            # Authentication guards
│   │   ├── interceptors/      # Request/response interceptors
│   │   └── pipes/             # Validation pipes
│   └── types/                 # TypeScript type definitions
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── migrations/            # Database migrations
├── test/                      # Test files
└── scripts/                   # Utility scripts
```

## 🔧 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/payment-integration

# Make changes and test
npm run test
npm run lint

# Commit with conventional format
git commit -m "feat(payments): add Stripe integration"

# Push and create PR
git push origin feature/payment-integration
```

### 2. Database Changes
```bash
# Modify prisma/schema.prisma
# Generate migration
npm run db:migrate

# Update Prisma client
npm run db:generate
```

### 3. Testing Strategy
```bash
# Write tests first (TDD approach)
# Run specific test file
npm run test -- users.service.spec.ts

# Run tests with coverage
npm run test:cov

# Run e2e tests
npm run test:e2e
```

## 🐛 Common Issues & Solutions

### Database Connection Issues
```bash
# Check if PostgreSQL is running
pg_isready -h localhost -p 5432

# Verify connection string in .env.development
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=your_password
DATABASE_NAME=e_commerce_backend_db
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run start:dev
```

### Prisma Client Issues
```bash
# Regenerate Prisma client
npm run db:generate

# Reset database if needed
npm run db:reset
```

## 📚 Key Resources

### API Documentation
- **Swagger UI**: `http://localhost:3000/api`
- **Health Check**: `http://localhost:3000/health`
- **Database Status**: `http://localhost:3000/db-status`

### Development Tools
- **Prisma Studio**: `npm run db:studio`
- **Database GUI**: pgAdmin, DBeaver, or TablePlus
- **API Testing**: Postman, Insomnia, or Thunder Client

### Learning Resources
- [NestJS Documentation](https://docs.nestjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🎯 Sprint Priorities

### Current Sprint Focus
Check `DEVELOPMENT_ROADMAP.md` for detailed sprint planning:

1. **Sprint 1**: Foundation & Setup ✅
2. **Sprint 2**: User Management (Current)
3. **Sprint 3**: Product Catalog
4. **Sprint 4**: Inventory Management
5. **Sprint 5**: Order Processing

### Daily Tasks
- [ ] Check sprint board for assigned tasks
- [ ] Review pull requests
- [ ] Update test coverage
- [ ] Document new features

## 🤝 Team Guidelines

### Code Style
- Use TypeScript strict mode
- Follow ESLint and Prettier rules
- Write meaningful commit messages
- Add JSDoc comments for public APIs

### Testing Requirements
- Unit tests for all services
- Integration tests for controllers
- E2E tests for critical user flows
- Minimum 90% code coverage

### Review Process
1. Self-review your code
2. Ensure all tests pass
3. Update documentation
4. Request team review
5. Address feedback promptly

## 🚨 Emergency Procedures

### Production Issues
1. Check monitoring dashboards
2. Review recent deployments
3. Check application logs
4. Contact on-call engineer if needed

### Database Issues
1. Check database connectivity
2. Review recent migrations
3. Monitor query performance
4. Consider rollback if necessary

## 📞 Getting Help

### Team Contacts
- **Tech Lead**: `tech-lead@company.com`
- **DevOps**: `devops@company.com`
- **Product Owner**: `product@company.com`

### Communication Channels
- **Slack**: `#ecommerce-backend`
- **Stand-ups**: Daily at 9:00 AM
- **Code Reviews**: GitHub PR comments
- **Technical Discussions**: Team meetings

---

**Ready to build something amazing! 🚀**

*For detailed information, see `DEVELOPMENT_ROADMAP.md`*