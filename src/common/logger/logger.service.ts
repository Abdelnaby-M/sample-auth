import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import 'winston-daily-rotate-file';
import * as path from 'path';


@Injectable()
export class CustomLoggerService implements LoggerService {
  private logger: winston.Logger;

  constructor() {
    const logDirectory = path.join(__dirname, '../../../logs');
    this.logger = winston.createLogger({
      level: 'silly',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
        }),
      ),
      transports: [
        new winston.transports.DailyRotateFile({
          filename: `${logDirectory}/%DATE%.log`,
          datePattern: 'YYYY-MM-DD',
          zippedArchive: false,
          maxFiles: '30d',  // Keep logs for 30 days
        }),
        new winston.transports.Console(),
      ],
    });
  }

  log(message: string) {
    this.logger.info(message);
  }

  error(message: string, code: string) {
    this.logger.error(`${message} - ${code}`);
  }

  warn(message: string) {
    this.logger.warn(message);
  }

  debug(message: string) {
    this.logger.debug(message);
  }

  verbose(message: string) {
    this.logger.verbose(message);
  }

  silly(message: string) {
    this.logger.silly(message);
  }
}