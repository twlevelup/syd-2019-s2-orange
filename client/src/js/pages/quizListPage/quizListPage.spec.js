const QuizListPage = require('./quizListPage');

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

});
