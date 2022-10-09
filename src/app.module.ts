import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelsController } from './hotels/hotels.controller';
import { HotelsModule } from './hotels/hotels.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    HotelsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'app_hotel',
      autoLoadEntities: true,
      // entities: [Task],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
