import { Test } from '@nestjs/testing';
import { RequestsService } from './requests.service';

describe('RequestsService', () => {
  let service;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [RequestsService],
    }).compile();

    service = module.get(RequestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
