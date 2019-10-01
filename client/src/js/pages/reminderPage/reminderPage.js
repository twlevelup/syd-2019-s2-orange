const BasePage = require('watch-framework').BasePage;
class ReminderPage extends BasePage {
  template = require('./reminderPage.hbs');

  pageWillLoad() {
    this.fact = 'ball';
  }

  generateFunFacts() {
    const arrayOfFacts = ['apple', 'ball', 'cat', 'dog'];

    const randomIndex = Math.floor(Math.random() * arrayOfFacts.length);

    const randomFact = arrayOfFacts[randomIndex];

    this.fact = randomFact;
  }

  //  checkTime() {

  //    const dateToday = new Date();
  //    const currentHour = dateToday.getHours();
  //    const currentMinutes = dateToday.getMinutes();

  //    if(currentHour === 19 && currentMinutes === 25) {
  //      this.generateFunFacts()
  //    }
  //  }

  //  updateTimeEveryMinute() {
  //     setInterval(() => this.checkTime, 60000);
  //   }
}

module.exports = ReminderPage;
