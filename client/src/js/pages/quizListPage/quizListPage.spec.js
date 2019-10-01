const QuizListPage = require('./quizListPage');
const CongratsPage = require('../congratsPage/congratsPage');

describe('QuizListPage', () => {

  describe('contents to appear once the page renders', () => {
    it('should contain at lease 1 quiz', () => {
      const page = new QuizListPage();
      expect(page.render()).toContain('Which of these animals is not in the feline family?');
      expect(page.render()).toContain('Tiger');
      expect(page.render()).toContain('Leopard');
      expect(page.render()).toContain('Hyena');
      expect(page.render()).toContain('Jaguar');


    });
  });

  describe('#rightButtonEvent', () => {
    it('should go to congrats page', () => {
      const page = new QuizListPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('congrats');
    });
  });

});
