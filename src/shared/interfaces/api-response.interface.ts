import { HttpStatus } from '@nestjs/common';

export interface ApiResponse<T> {
  success: boolean;
  statusCode: HttpStatus;
  message: string;
  data: T;
}
