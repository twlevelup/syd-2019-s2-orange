const QuizListPage = require('./quizListPage');
const CongratsPage = require('../quizResultPage/quizResultPage');
const StorageHub = require('watch-framework').StorageHub;

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

  describe('#leftButtonEvent', () => {
    it('should go to category page', () => {
      const page = new QuizListPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('category');
    });

  });

  describe('#rightButtonEvent', () => {
    beforeEach(() => {
      StorageHub.setData('STEM', 0);
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    it('should go to quizResult page', () => {
      const page = new QuizListPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('quizResult');
    });

    describe('selects correct answer', () => {
      const initialValue = 1;
      beforeAll(() => {
        StorageHub.setData('STEM', initialValue);
        spyOn(StorageHub, 'setData');
        const page = new QuizListPage();
        spyOn(page, 'navigate');

        page.bottomButtonEvent();
        page.bottomButtonEvent();

        page.rightButtonEvent();
      });

      it('stores true when correct answer is selected', () => {
        expect(StorageHub.setData).toHaveBeenNthCalledWith(1, 'quizResult', true);
      });

      it('increments the store result by one when correct answer is selected', () => {
        expect(StorageHub.setData).toHaveBeenNthCalledWith(2, 'STEM', initialValue + 1);
      });
    });

    it('stores false when incorrect answer is selected', () => {
      spyOn(StorageHub, 'setData');
      const page = new QuizListPage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();

      page.rightButtonEvent();
      expect(StorageHub.setData).toBeCalledTimes(1);
      expect(StorageHub.setData).toBeCalledWith('quizResult', false);
    });
  });

  describe('#bottomButtonEvent', () => {
    it('should call highlightAnswer', () => {
      const page = new QuizListPage();
      spyOn(page, 'highlightAnswer');

      page.bottomButtonEvent();
      expect(page.highlightAnswer).toHaveBeenCalled();
    });

    describe('#highlightAnswer', () => {
      document.body.innerHTML =
        `<ul style="list-style: none;"> 1. Which of these animals is not in the feline family?
          <li id="0" class="selected-answer">A. Tiger</li>
          <li id="1">B. Leopard</li>
          <li id="2">C. Hyena</li>
          <li id="3">D. Jaguar</li>
        </ul>`;

      // ############## get highlight element ##############
      it('should get the current highlighted answer', () => {
        const page = new QuizListPage();
        const answer = page.getCurrentHighlightedElement();
        // console.log('answer', answer);
        expect(answer.classList).toContain("selected-answer");
      });

      it('should get the next highlighted answer', () => {
        const expectedNextHighlightedElement = document.getElementById("1");

        const page = new QuizListPage();
        const nextAnswer = page.getNextHighlightedElement("0");
        expect(nextAnswer).toEqual(expectedNextHighlightedElement);
      });

      it('should still get the highlighed answer D when already highlighed on D', () => {
        const expectedNextHighlightedElement = document.getElementById("3");

        const page = new QuizListPage();
        const nextAnswer = page.getNextHighlightedElement("3");
        expect(nextAnswer).toEqual(expectedNextHighlightedElement);
      });

      // ############## change backgroundColor ##############
      it('should remove the highlight from the current highlighted answer', () => {
        const page = new QuizListPage();
        const currentHighlightedElement = page.getCurrentHighlightedElement();
        // console.log('BEFORE: currentHighlightedElement.classList', currentHighlightedElement.classList);

        page.removeHighlightFromCurrentElement(currentHighlightedElement);
        // console.log('AFTER: currentHighlightedElement.classList', currentHighlightedElement.classList);
        expect(currentHighlightedElement.classList).not.toContain("selected-answer");
      });

      it('should highlight the next element, which by default is answer B, in blue', () => {
        const page = new QuizListPage();
        const nextAnswer = page.getNextHighlightedElement("0");
        // console.log('BEFORE: nextAnswer.classList', nextAnswer.classList);

        page.addHighlightToNextElement(nextAnswer);
        // console.log('AFTER: nextAnswer.classList', nextAnswer.classList);
        expect(nextAnswer.classList).toContain("selected-answer");
      });
    });
  });



});
