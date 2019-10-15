const CongratsPage = require('./congratsPage');

describe('CongratsPage', () => {

  describe('contents to appear once the page renders', () => {
    it('should render congratulations', () => {
      const page = new CongratsPage();
      expect(page.render()).toContain("<h1>Congratulations!</h1>");
    });
  });

});
