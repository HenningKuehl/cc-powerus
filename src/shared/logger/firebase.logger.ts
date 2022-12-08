import { Injectable, LoggerService, Scope } from "@nestjs/common";
import * as logger from "firebase-functions/logger";

@Injectable({
  scope: Scope.TRANSIENT
})
export class FirebaseLogger implements LoggerService {
  log(message: any, ...optionalParams): any {
    logger.log(message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]): any {
    logger.error(message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]): any {
    logger.warn(message, ...optionalParams);
  }
}
