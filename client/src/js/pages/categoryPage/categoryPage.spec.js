const CategoryPage = require('./categoryPage');

describe('CategoryPage', () => {

  describe('contents to appear once the page renders', () => {
    it('should render 4 categories', () => {
      const page = new CategoryPage();
      expect(page.render()).toContain("<div> Science </div>");
    });
  });

}); // describe CategoryPage
