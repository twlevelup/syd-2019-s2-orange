const BasePage = require('watch-framework').BasePage;

class QuizListPage extends BasePage {
  template = require('./quizListPage.hbs');


  rightButtonEvent() {
    this.navigate('congrats')
  }

  downButtonEvent() {
    this.highlightAnswer();
  }

  highlightAnswer() {

  }
}


module.exports = QuizListPage;
