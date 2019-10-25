const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const logo = require('../../../images/logo.png');
const plop = './sounds/plop.mp3';
const notification = './sounds/notification_sound.wav';

//test for raspberrypi
class HomePage extends BasePage {
  template = require('./homePage.hbs');

  pageWillLoad() {
    StorageHub.setData('contacts', [
      { name: 'Ray', phoneNumber: '0431 111 111' },
      { name: 'Sinan', phoneNumber: '0431 222 222' },
      { name: 'Jafari', phoneNumber: '0431 333 333' }
    ]);

    this.updateTimeEverySecond();
    const dateTime = this.getDateTime();
    this.date = dateTime.date;
    this.time = dateTime.time;
    this.logo = logo;

    this.checkReminderTime();
  }

  getDateTime() {
    const dateTime = new Date(Date.now()).toLocaleString('en-AU').split(',');
    return {
      date: dateTime[0],
      time: dateTime[1]
    };
  }

  updateTimeEverySecond() {
    setInterval(() => this.updateTimeDisplay(this.getDateTime), 1000);
  }

  updateTimeDisplay(getTime) {
    const clockTime = document.getElementById('clock-time');
    if (clockTime) {
      clockTime.textContent = getTime().time;
    }
  }

  rightButtonEvent() {
    this.navigate('screensaver');
  }

  topButtonEvent() {
    this.navigate('category');
  }

  bottomButtonEvent() {
    this.navigate('rewards');
  }
  faceButtonEvent() {
    this.navigate('/');
  }

  checkTime() {
    const dateToday = new Date();
    const currentHour = dateToday.getHours();
    const currentMinutes = dateToday.getMinutes();

    if (currentHour === 15 && currentMinutes === 30) {
      AudioHub.playSound(notification);
      this.navigate('reminder');
    }
  }

  checkReminderTime() {
    setInterval(() => this.checkTime(), 55000);
  }
}

//  var inactivityTime = function () {
//     var time;
//     window.onload = resetTimer;
//     document.onkeypress = resetTimer;

//   function screenSaver() {
//     document.addEventListener('click', resetTimer, true);
//      this.navigate('screensaver');
//   }

//   function resetTimer() {
//       clearTimeout(time);
//       time = setTimeout(screenSaver, 2000)
//       // 1000 milliseconds = 1 second
//   }
// };

module.exports = HomePage;
