const BasePage = require('watch-framework').BasePage;
const starBlue = require('../../../images/star-blue.png');
const starGrey = require('../../../images/star-grey.png');
const trophy = require('../../../images/trophy.png');

class RewardsPage extends BasePage{
  template = require('./rewardsPage.hbs');
  pageWillLoad() {
    this.trophy = trophy;
    this.starBlue = starBlue;
    this.starGrey = starGrey;
    this.trophyNumber = this.getNumberOfTrophys();
  };
  getSTEMScores() {
    const scores = 25;
  }

  getNumberOfStars(points) {
    return points%3;
  }

  getNumberOfTrophys(points) {
    // return Math.floor(points/3);
    return 4;
  }
}


module.exports = RewardsPage;
