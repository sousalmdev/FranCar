import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingGuard } from './loading.guard';
import { LoadingService } from './loading.service';

describe('LoadingGuard', () => {
  let guard: LoadingGuard;
  let loadingService: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [LoadingGuard, LoadingService]
    });

    guard = TestBed.inject(LoadingGuard);
    loadingService = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should activate and manage loading state', (done) => {
    loadingService.show();
    guard.canActivate(null as any,null as any).subscribe(result => {
      expect(result).toBeTrue();
      expect(loadingService.isLoading).toBeTruthy();
      done();
    });
  });
});
