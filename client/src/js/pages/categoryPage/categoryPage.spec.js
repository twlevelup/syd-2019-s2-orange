const CategoryPage = require('./categoryPage');

describe('CategoryPage', () => {

  describe('contents to appear once the page renders', () => {
    it('should render 4 categories and a title', () => {
      const page = new CategoryPage();
      expect(page.render()).toContain("<p> Science </p>");
      expect(page.render()).toContain("<p> Technology </p>");
      expect(page.render()).toContain("<p> Engineering </p>");
      expect(page.render()).toContain("<p> Mathematics </p>");
      expect(page.render()).toContain("<h1>Games</h1>");
    });
  });

  describe('#rightButtonEvent', () => {
    it('should go to quizList page', () => {
      const page = new CategoryPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('quizList');
    });
  });

}); // describe CategoryPage
