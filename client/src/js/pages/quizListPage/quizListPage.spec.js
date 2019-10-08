const QuizListPage = require('./quizListPage');
const CongratsPage = require('../congratsPage/congratsPage');

describe('QuizListPage', () => {

  describe('contents to appear once the page renders', () => {
    it('should contain at lease 1 quiz', () => {
      const page = new QuizListPage();
      expect(page.render()).toContain('Which of these animals is not in the feline family?');
      expect(page.render()).toContain('Tiger');
      expect(page.render()).toContain('Leopard');
      expect(page.render()).toContain('Hyena');
      expect(page.render()).toContain('Jaguar');


    });
  });

  describe('#rightButtonEvent', () => {
    it('should go to congrats page', () => {
      const page = new QuizListPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('congrats');
    });
  });

  describe('#downBottonEvent', () => {
    it('should call highlightAnswer', () => {
      const page = new QuizListPage();
      spyOn(page, 'highlightAnswer');

      page.downButtonEvent();
      expect(page.highlightAnswer).toHaveBeenCalled();
    });

    it('should get highlighted answer', () => {
      document.body.innerHTML =
      `<ul style="list-style: none;"> 1. Which of these animals is not in the feline family?
          <li id="0" class="selected-answer">A. Tiger</li>
          <li id="1">B. Leopard</li>
          <li id="2">C. Hyena</li>
          <li id="3">D. Jaguar</li>
      </ul>`
      const page = new QuizListPage();
      const answer = page.highlightAnswer();
      console.log('answer', answer)
      // expect(answer to be '0', as by default '0' is always highlighted once page loads)



    })
  });

});
