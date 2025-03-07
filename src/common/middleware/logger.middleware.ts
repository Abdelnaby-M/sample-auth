import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CustomLoggerService } from '../logger/logger.service';
import * as path from 'path';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private logger: CustomLoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const start = Date.now();

    res.on('finish', () => {
      const duration = Date.now() - start;
      const { method, originalUrl } = req;
      const { statusCode } = res;

      // Create an error to capture stack trace
      const error = new Error();
      const stackLines = error.stack?.split('\n') || [];
      
      // Find the first stack line that includes your source code path
      const appStackLine = stackLines.find(line => line.includes('/src/') || line.includes('/dist/'));

      let relativePath = 'unknown';
      let lineNumber = 'unknown';

      if (appStackLine) {
        const match = appStackLine.match(/\((.*):(\d+):(\d+)\)/);
        if (match) {
          const fullPath = match[1];
          lineNumber = match[2];
          // Convert absolute path to relative path
          relativePath = path.relative(process.cwd(), fullPath);
        }
      }

      let logMessage = `${relativePath}:${lineNumber}  [method=${method}] ${originalUrl} [statusCode=${statusCode}] [duration=${duration}ms] `;
      this.logger.log(logMessage);

      // Log request and response data
      this.logger.log("Request Body: " + JSON.stringify(req.body));
      this.logger.log("Request Headers auth: " + JSON.stringify(req.headers.authorization));
      // this.logger.log("Request Header: " + JSON.stringify(req.headers));
      
     
    });

    next();
  }
}
