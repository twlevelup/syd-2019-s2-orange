const BasePage = require('watch-framework').BasePage;
class ReminderPage extends BasePage {
  template = require('./reminderPage.hbs');

  pageWillLoad() {
    this.updateTimeEveryMinute();
  }

  generateFunFacts() {
    const arrayOfFacts = ["Isaac Newton came up with the theory of gravity", "Babies have around 100 more bones than adults", "Both big and small cats can purr, but only some large cats can roar", "The Eiffel Tower can be 15 cm taller during the summer"];

    const randomIndex = Math.floor(Math.random() * arrayOfFacts.length);

    const randomFact = arrayOfFacts[randomIndex];

    const funFact = document.getElementById('fact');

     if (funFact) {
      funFact.textContent = randomFact;
     }
  }

   checkTime() {
     const dateToday = new Date();
     const currentHour = dateToday.getHours();
     const currentMinutes = dateToday.getMinutes();

     if (currentHour === 16 && currentMinutes === 30) {
       this.generateFunFacts();
     }
   }

   updateTimeEveryMinute() {
      setInterval(() => this.checkTime(), 55000);
    }
}

module.exports = ReminderPage;
