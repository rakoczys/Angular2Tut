import { FirstAppPage } from './app.po';

describe('first-app App', function() {
  let page: FirstAppPage;

  beforeEach(() => {
    page = new FirstAppPage();
  });

  it('should display message which is not important', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('This is a message. It\'s not important!');
});
});
