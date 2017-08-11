import { Angu2LaravelPage } from './app.po';

describe('angu2-laravel App', function() {
  let page: Angu2LaravelPage;

  beforeEach(() => {
    page = new Angu2LaravelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
