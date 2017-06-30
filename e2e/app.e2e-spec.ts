import { MeanAuthzeroPage } from './app.po';

describe('mean-authzero App', () => {
  let page: MeanAuthzeroPage;

  beforeEach(() => {
    page = new MeanAuthzeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
