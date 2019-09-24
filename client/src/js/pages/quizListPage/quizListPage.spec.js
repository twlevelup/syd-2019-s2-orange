const QuizListPage = require('./quizListPage');

describe('QuizListPage', () => {

  describe('contents to appear once the page renders', () => {
    it('should contain at lease 1 quiz', () => {
      const page = new QuizListPage();
      expect(page.render()).toContain('Quiz 1');
    });
  });

});
