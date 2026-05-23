import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

const isLocal = !process.env.DATABASE_URL || 
  process.env.DATABASE_URL.includes('localhost') || 
  process.env.DATABASE_URL.includes('127.0.0.1');

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: isLocal ? false : { rejectUnauthorized: false },
  autoLoadEntities: true,
  synchronize: true,
};