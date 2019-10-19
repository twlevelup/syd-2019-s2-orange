const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;


class QuizResultPage extends BasePage {

  template = require('./quizResultPage.hbs');

  pageWillLoad() {
    const result = StorageHub.getData('quizResult');

    this.message = 'Better luck next time!';
    if (result === true) {
      this.message = 'Congratulations!';
    }
  }
}

module.exports = QuizResultPage;
