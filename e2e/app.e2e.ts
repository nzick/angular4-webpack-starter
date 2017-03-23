import { browser, element, by } from 'protractor';

describe('App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'Angular 4 Webpack Seed Project';
    expect(subject).toEqual(result);
  });

});
