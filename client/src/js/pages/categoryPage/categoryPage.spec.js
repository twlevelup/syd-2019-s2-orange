const CategoryPage = require('./categoryPage');

describe('CategoryPage', () => {

  describe('contents to appear once the page renders', () => {
    it('should render 1 categories and a title', () => {
      const page = new CategoryPage();
      expect(page.render()).toContain("<h1>Games</h1>");
      expect(page.render()).toContain("<button> Science </button>");
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



});
