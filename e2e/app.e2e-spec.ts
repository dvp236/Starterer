import { StartererPage } from './app.po';

describe('starterer App', () => {
  let page: StartererPage;

  beforeEach(() => {
    page = new StartererPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
