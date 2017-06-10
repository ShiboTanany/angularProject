import { StagePage } from './app.po';

describe('stage App', () => {
  let page: StagePage;

  beforeEach(() => {
    page = new StagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
