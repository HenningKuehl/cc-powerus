import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { IApiResponse } from '../interfaces/api-response.interface';

@Injectable()
export class ApiResponseInterceptor<T>
  implements NestInterceptor<T, IApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<IApiResponse<T>> {
    return next.handle().pipe(
      map((data) => ({
        data,
        message: 'Ok',
        statusCode: HttpStatus.OK,
        success: true,
      })),
    );
  }
}
