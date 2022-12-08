import { HttpStatus } from '@nestjs/common';

export interface IApiResponse<T> {
  success: boolean;
  statusCode: HttpStatus;
  message: string;
  data: T;
}
