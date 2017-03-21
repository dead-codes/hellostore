import { HellostorePage } from './app.po';

describe('hellostore App', function() {
  let page: HellostorePage;

  beforeEach(() => {
    page = new HellostorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
