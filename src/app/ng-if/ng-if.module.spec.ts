import { NgIfModule } from './ng-if.module';

describe('NgIfModule', () => {
  let ngIfModule: NgIfModule;

  beforeEach(() => {
    ngIfModule = new NgIfModule();
  });

  it('should create an instance', () => {
    expect(ngIfModule).toBeTruthy();
  });
});
