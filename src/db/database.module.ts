import { Module } from "@nestjs/common";
import { DatabaseService } from "./database.provider";

@Module({
  providers: [DatabaseService],
  exports: [DatabaseService], // makes it usable in other modules
})
export class DatabaseModule {}
