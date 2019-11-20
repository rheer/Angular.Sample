import { RoutesModule } from './routes.module';

describe('RoutesModule', () => {
  let routerModule: RoutesModule;

  beforeEach(() => {
    routerModule = new RoutesModule();
  });

  it('should create an instance', () => {
    expect(routerModule).toBeTruthy();
  });
});
