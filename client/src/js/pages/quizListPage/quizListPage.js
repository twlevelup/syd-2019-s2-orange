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
    const currentHighlightedElement = document.querySelector(".selected-answer");
    console.log('currentHighlightedElement', currentHighlightedElement);
    // after finding the current highlighted element with the 'selected-answer' class
    // need to get currentHighlightedElement's ID which is the string '0/1/2/3'
    // then do the logic to decide the next ElementID should be currentID++;
    // for upButtonEvent, similarly, currentID--;
    // then add the 'selected-answer' class to the next <li> element to hightlight!

  }

}


module.exports = QuizListPage;
