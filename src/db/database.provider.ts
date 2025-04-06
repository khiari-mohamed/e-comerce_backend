import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { connect, disconnect } from 'mongoose';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  async onModuleInit() {
    await this.connectToDatabase();
  }

  async onModuleDestroy() {
    await this.disconnectFromDatabase();
  }

  private async connectToDatabase() {
    try {
      const uri = process.env.MONGODB_URI;
      if (!uri) throw new Error('❌ MONGODB_URI is not defined in .env file');

      await connect(uri);
      console.log('✅ Connected to MongoDB 🗃️');
    } catch (error) {
      console.error('❌ Database connection error:', error);
      throw error;
    }
  }

  private async disconnectFromDatabase() {
    try {
      await disconnect();
      console.log('🔌 Disconnected from MongoDB');
    } catch (error) {
      console.error('❌ Error disconnecting from MongoDB:', error);
      throw error;
    }
  }
}
