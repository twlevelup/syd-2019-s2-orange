const BasePage = require('watch-framework').BasePage;

class ReminderPage extends BasePage {
  template = require('./reminderPage.hbs');

  pageWillLoad() {
    this.fact =  this.generateFunFacts();
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  generateFunFacts() {
    const arrayOfFacts = ["Pineapples takes two years to grow.", "The titanic was 882 feet (269m) long.", "Electronic computers were developed in the 1990s and were the size of a large room. Now computers could fit in the size of your wrist!", "Your nose and ears continue to grow throughout your entire life."];

    const randomIndex = Math.floor(Math.random() * arrayOfFacts.length);

    const randomFact = arrayOfFacts[randomIndex];

    return randomFact;

  }

}

module.exports = ReminderPage;
