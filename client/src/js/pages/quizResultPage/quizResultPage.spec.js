const QuizResult = require('./quizResultPage');
const StorageHub = require('watch-framework').StorageHub;

describe('QuizResultPage', () => {
  describe('contents to appear once the page renders', () => {
    it('should render congratulations when quizResult is true', () => {
      const page = new QuizResult();

      StorageHub.setData('quizResult', true);
      page.pageWillLoad();
      expect(page.render()).toContain("<h1>Congratulations!</h1>");
    });

    it('should render wrong message when quizResult is false in storage', () => {
      const page = new QuizResult();

      StorageHub.setData('quizResult', false);
      page.pageWillLoad();
      expect(page.render()).toContain("<h1>Better luck next time!</h1>");
    });
  });

  describe('#faceButtonEvent',() => {
    it('should go to Home page', () => {
      const page = new QuizResult();
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
});
