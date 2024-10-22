import { TestBed } from '@angular/core/testing';

import { EquipeGuard } from './equipe.guard';

describe('EquipeGuard', () => {
  let guard: EquipeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EquipeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
