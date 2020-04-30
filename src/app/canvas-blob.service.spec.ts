import { TestBed } from '@angular/core/testing';

import { CanvasBlobService } from './canvas-blob.service';

describe('CanvasBlobService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasBlobService = TestBed.get(CanvasBlobService);
    expect(service).toBeTruthy();
  });
});
