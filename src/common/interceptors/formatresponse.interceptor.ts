
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// Study: https://docs.nestjs.com/interceptors#binding-interceptors
// We have created a generic response interface to standardize API responses to the client endpoints.
export interface Response<T>{
    success: boolean;
    data: T;
    message?: string;
    timestamp?: Date;
    path:string;
}


// This interceptor will format the response to match the Response<T> interface.
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {

    //Lets get request object to extract path
    const request = context.switchToHttp().getRequest();

    // now, we have to send the response in the desired format
    
    // return next.handle().pipe(map(data => ({ data }))); // previous simple version

    return next.handle().pipe( // Here, we use the RxJS map operator to transform the response. The next.handle() method returns an Observable, which we can manipulate. The pipe method allows us to chain multiple operators to the Observable.
        map(data => ({ // The map operator takes the data emitted by the Observable and transforms it into a new object that matches the Response<T> interface.
            success: true,
            data,
            timestamp: new Date(), // current timestamp
            path: request.url // request path
        }))
    );
  }
}