import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CHECKIN_API_URL } from './checkin.model';
import { CheckinService } from './checkin.service';

describe('CheckinService', () => {
  let service: CheckinService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CheckinService,
        {
          provide: CHECKIN_API_URL,
          useValue: ''
        }
      ]
    })
  );

  beforeEach(() => {
    service = TestBed.get(CheckinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
