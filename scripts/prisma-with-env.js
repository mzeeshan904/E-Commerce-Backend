#!/usr/bin/env node

const { spawn } = require('child_process');

// Load environment variables from .env.development
require('dotenv').config({ path: '.env.development' });

const {
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
} = process.env;

const DATABASE_URL = `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOST}:${DATABASE_PORT}/${DATABASE_NAME}`;

// Get the command and arguments from command line
const [, , ...args] = process.argv;

if (args.length === 0) {
  console.error(
    'Usage: node scripts/prisma-with-env.js <prisma-command> [args...]',
  );
  process.exit(1);
}

// Set environment variables for the child process
const env = {
  ...process.env,
  DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV || 'development',
};

console.log('DATABASE_URL set for Prisma:', DATABASE_URL);

// Spawn the Prisma command with the environment
const child = spawn('npx', ['prisma', ...args], {
  stdio: 'inherit',
  env,
  shell: true,
});

child.on('close', (code) => {
  process.exit(code);
});

child.on('error', (error) => {
  console.error('Error running Prisma command:', error);
  process.exit(1);
});
