const BasePage = require('watch-framework').BasePage;

class QuizListPage extends BasePage {
  template = require('./quizListPage.hbs');

  idArray = [0, 1, 2, 3];

  rightButtonEvent() {
    this.navigate('congrats')
  }

  downButtonEvent() {
    this.highlightAnswer();
  }

  highlightAnswer() {
    const currentHighlightedElementID = document.getElementById('0');
    // need to fine the ID of that element like 'A'
    console.log('currentHighlightedElement', currentHighlightedElementID);

  }

}


module.exports = QuizListPage;
