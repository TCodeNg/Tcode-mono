import { Observable } from 'rxjs';

export interface MediaOperationInterface<T> {
  data?: T;
  progress?: number;
  error?: Error;
}

export type MediaOperation<T> = MediaOperationInterface<T>;

interface MediaServiceInterface<T> {
  upload(file: File): Observable<MediaOperation<T>>;
}

export abstract class MediaService<T> implements MediaServiceInterface<T> {
  abstract upload(file: File): Observable<MediaOperation<T>>;
}
