import { VinylatePage } from './app.po';

describe('vinylate App', () => {
  let page: VinylatePage;

  beforeEach(() => {
    page = new VinylatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
