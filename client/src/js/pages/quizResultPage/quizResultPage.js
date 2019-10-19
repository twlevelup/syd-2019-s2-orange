const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;


class QuizResultPage extends BasePage {

  template = require('./quizResultPage.hbs');

  pageWillLoad() {
    const result = StorageHub.getData('quizResult');

    this.message = 'Congratulations!';
    if (result === false) {
      this.message = 'Better luck next time!';
    }
  }
}

module.exports = QuizResultPage;
