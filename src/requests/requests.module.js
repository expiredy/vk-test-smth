import { Module } from '@nestjs/common';
import { RequestsService } from './controllers/requests.service';

@Module({
  providers: [RequestsService]
})
export class RequestsModule {}
