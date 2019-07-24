import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import * as faker from 'faker';
import { CHECKIN_API_URL } from './checkin.model';
import { CheckinService } from './checkin.service';
import { userAndRoomFactory } from './testing/checkin.data';

describe('CheckinService', () => {
  const apiUrl: string = faker.internet.url();
  let service: CheckinService;
  let httpClient: HttpClient;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CheckinService,
        {
          provide: CHECKIN_API_URL,
          useValue: apiUrl
        }
      ]
    })
  );

  beforeEach(() => {
    service = TestBed.get(CheckinService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('checkIn', () => {
    it('shoould call the httpClient post method', () => {
      const userAndRoom = userAndRoomFactory.build();
      httpClient.post = jest.fn();

      service.checkIn(userAndRoom);

      expect(httpClient.post).toHaveBeenCalledWith(
        `${apiUrl}/checkin`,
        userAndRoom
      );
    });
  });

  describe('checkOut', () => {
    it('shoould call the httpClient post method', () => {
      const userAndRoom = userAndRoomFactory.build();
      httpClient.post = jest.fn();

      service.checkOut(userAndRoom);

      expect(httpClient.post).toHaveBeenCalledWith(
        `${apiUrl}/checkout`,
        userAndRoom
      );
    });
  });
});
