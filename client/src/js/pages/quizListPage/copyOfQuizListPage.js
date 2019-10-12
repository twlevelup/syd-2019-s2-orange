const BasePage = require('watch-framework').BasePage;

class QuizListPage extends BasePage {
  template = require('./quizListPage.hbs');

  rightButtonEvent() {
    this.navigate('congrats')
  }

  bottomButtonEvent() {
    // console.log('called downButtonEvent')
    this.highlightAnswer();
  }

  getCurrentHighlightedElement() {
    console.log('getCurrentHighlightedElement:', document.querySelector(".selected-answer"));
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

  // highlightAnswer() {
  //   console.log('called hightlightAnswer')

  //   // // 1, find the current highlighted element
  //   // console.log('getCurrentHighlightedElement:', document.querySelector(".selected-answer").getAttribute("id"));
  //   // // const currentHighlightedElement = document.querySelector(".selected-answer");

  //   const currentHighlightedElement = this.getCurrentHighlightedElement();
  //   console.log('currentHighlightedElement', currentHighlightedElement);

  //   // // 2, get currentHighlightedElement's ID which is a string '0/1/2/3'
  //   // const currentHighlightedElementID = currentHighlightedElement.getAttribute("id");

  //   const currentHighlightedElementID = document.querySelector(".selected-answer").getAttribute("id");
  //   console.log('currentHighlightedElementID', currentHighlightedElementID);

  //   const nextHighlightedElement = this.getNextHighlightedElement(currentHighlightedElementID);
  //   console.log('nextHighlightedElement', nextHighlightedElement);

  //   // 3, remove the 'selected-answer' class from the currentHighlightedElement
  //   this.removeHighlightFromCurrentElement(currentHighlightedElement);

  //   // 4, add the 'selected-answer' class to the nextHighlightedElement
  //   this.addHighlightToNextElement(nextHighlightedElement);
  // }


  // working version without calling other functions
  highlightAnswer() {
    console.log('called hightlightAnswer');

    // 1, find the current highlighted element ID
    const currentHighlightedElement = document.querySelector(".selected-answer");
    console.log('currentHighlightedElement', currentHighlightedElement);
    let currentId = currentHighlightedElement.getAttribute("id");
    console.log('currentId', currentId);

    currentId = parseInt(currentId);
    let nextId = currentId;

    if(currentId >= 0 && currentId < 3){
      nextId = (currentId + 1).toString();
    }
    console.log('nextId', nextId);

    // 2, next highlighted element
    const nextHighlightedElement = document.getElementById(nextId);
    console.log('nextHighlightedElement', nextHighlightedElement);

    // 3, remove the 'selected-answer' class from the currentHighlightedElement
    console.log('BEFORE: currentHighlightedElement.classList', currentHighlightedElement.classList);
    currentHighlightedElement.classList.remove("selected-answer");
    console.log('AFTER: currentHighlightedElement.classList', currentHighlightedElement.classList);

    // 4, add the 'selected-answer' class to the nextHighlightedElement
    console.log('BEFORE: nextHighlightedElement.classList', nextHighlightedElement.classList);
    nextHighlightedElement.classList.add("selected-answer");
    console.log('AFTER: nextHighlightedElement.classList', nextHighlightedElement.classList);

  }



}


module.exports = QuizListPage;
