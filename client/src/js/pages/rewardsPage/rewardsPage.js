const BasePage = require('watch-framework').BasePage;

class RewardsPage extends BasePage{
  template = require('./rewardsPage.hbs');

  getSTEMScores() {
    const scores = [10, 14, 9, 3];
  }

  getNumberOfStars(points) {
    return points%5;
  }

  getNumberOfTrophys(points) {
    return Math.floor(points/5);
  }
}




module.exports = RewardsPage;
