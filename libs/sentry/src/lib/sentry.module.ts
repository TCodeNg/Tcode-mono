import { Module } from '@nestjs/common';
import { SentryInterceptor } from './sentry.interceptor';

@Module({
  controllers: [],
  providers: [
    SentryInterceptor
  ],
  exports: [
    SentryInterceptor
  ],
})
export class SentryModule {}
