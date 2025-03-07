import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import configuration from './config/configuration';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomLoggerService } from './common/logger/logger.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client', 'out'),
      renderPath: '/',  
      serveRoot: '/',
      serveStaticOptions:{
        fallthrough: true,
      }
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('mongoUrl'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule
  ],
  providers: [CustomLoggerService]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*')
  }
}

