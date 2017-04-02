import { CribbagePage } from './app.po';

describe('cribbage App', () => {
  let page: CribbagePage;

  beforeEach(() => {
    page = new CribbagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
