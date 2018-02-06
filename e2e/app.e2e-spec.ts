import { StellarAppPage } from './app.po';

describe('stellar-app App', () => {
  let page: StellarAppPage;

  beforeEach(() => {
    page = new StellarAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
