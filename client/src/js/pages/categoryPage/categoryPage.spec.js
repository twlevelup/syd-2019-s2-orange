const CategoryPage = require('./categoryPage');

describe('CategoryPage', () => {

  describe('contents to appear once the page renders', () => {
    it('should render 4 categories', () => {
      const page = new CategoryPage();
      expect(page.render()).toContain("<div> Science </div>");
      expect(page.render()).toContain("<div> Technology </div>");
      expect(page.render()).toContain("<div> Engineering </div>");
      expect(page.render()).toContain("<div> Mathematics </div>");
    });
  });

  describe('#rightButtonEvent', () => {
    it('should go to quizList page', () => {
      const page = new CategoryPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('quizListPage');
    });
  });

}); // describe CategoryPage
