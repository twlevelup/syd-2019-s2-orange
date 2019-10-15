const QuizResult = require('./quizResultPage');

describe('QuizResultPage', () => {

  describe('contents to appear once the page renders', () => {
    it('should render congratulations', () => {
      const page = new QuizResult();
      expect(page.render()).toContain("<h1>Congratulations!</h1>");
    });
  });

});
