import { CustomPrimengModule } from './custom-primeng.module';

describe('CustomPrimengModule', () => {
  let customPrimengModule: CustomPrimengModule;

  beforeEach(() => {
    customPrimengModule = new CustomPrimengModule();
  });

  it('should create an instance', () => {
    expect(customPrimengModule).toBeTruthy();
  });
});
