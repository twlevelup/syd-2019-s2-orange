const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const starBlue = require('../../../images/star-blue.png');
const starGrey = require('../../../images/star-grey.png');

class QuizResultPage extends BasePage {
  template = require('./quizResultPage.hbs');

  pageWillLoad() {
    const result = StorageHub.getData('quizResult');

    this.message = 'Better luck next time!';
    this.star = starGrey;
    if (result === true) {
      this.star = starBlue;
      this.message = 'Congratulations!';
    }
  }
}

module.exports = QuizResultPage;
