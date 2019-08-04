import { Validate } from './validate';
import { TestBed } from '@angular/core/testing';



describe('Validate', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should create an instance', () => {
    const validate: Validate = TestBed.get(Validate);
    expect(validate).toBeTruthy()
  });
});
