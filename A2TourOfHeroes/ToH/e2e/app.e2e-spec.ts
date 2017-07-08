import { ToHPage } from './app.po';

describe('to-h App', function() {
  let page: ToHPage;

  beforeEach(() => {
    page = new ToHPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
