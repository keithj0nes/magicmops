import { MagicmopsPage } from './app.po';

describe('magicmops App', function() {
  let page: MagicmopsPage;

  beforeEach(() => {
    page = new MagicmopsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
