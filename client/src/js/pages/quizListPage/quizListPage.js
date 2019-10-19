const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;


class QuizListPage extends BasePage {
  template = require('./quizListPage.hbs');

  rightButtonEvent() {
    const currentHighlightedElement = this.getCurrentHighlightedElement();
    const currentHighlightedElementId = currentHighlightedElement.getAttribute("id");
    if (currentHighlightedElementId === "2"){
      StorageHub.setData('quizResult', true);

      const currentScore = StorageHub.getData('STEM');
      StorageHub.setData('STEM', currentScore + 1);
    } else {
      StorageHub.setData('quizResult', false);
    }
    this.navigate('quizResult');
  }

  leftButtonEvent() {
    this.navigate('category');
  }

  bottomButtonEvent() {
    // console.log('called downButtonEvent')
    this.highlightAnswer();
  }

  getCurrentHighlightedElement = () => {
    // console.log('getCurrentHighlightedElement:', document.querySelector(".selected-answer"));
    return document.querySelector(".selected-answer");
  }

  getNextHighlightedElement(id) {
    id = parseInt(id);
    if(id >= 0 && id < 3){
      id = (id + 1).toString();
    }
    return document.getElementById(id);
  }

  removeHighlightFromCurrentElement(ele) {
    if(ele){
      ele.classList.remove("selected-answer");
    }
  }

  addHighlightToNextElement(ele) {
    if(ele) {
      ele.classList.add("selected-answer");
    }
  }

  highlightAnswer() {
    // console.log('called hightlightAnswer');

    // 1, find the current highlighted element
    const currentHighlightedElement = this.getCurrentHighlightedElement();
    // console.log('currentHighlightedElement', currentHighlightedElement);

    // 2, get currentHighlightedElement's ID which is a string '0/1/2/3'
    const currentHighlightedElementID = currentHighlightedElement.getAttribute("id");
    // console.log('currentHighlightedElementID', currentHighlightedElementID);

    // 3, get nextHighlightedElement
    const nextHighlightedElement = this.getNextHighlightedElement(currentHighlightedElementID);
    // console.log('nextHighlightedElement', nextHighlightedElement);

    // 4, remove the 'selected-answer' class from the currentHighlightedElement
    this.removeHighlightFromCurrentElement(currentHighlightedElement);

    // 5, add the 'selected-answer' class to the nextHighlightedElement
    this.addHighlightToNextElement(nextHighlightedElement);
  }
}


module.exports = QuizListPage;
