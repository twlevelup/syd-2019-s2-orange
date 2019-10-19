const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;
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
    this.stars = this.getNumberOfStars();
  };


  getSTEMScores() {
    return StorageHub.getData('STEM')
  }

  getNumberOfStars() {
     let stars = this.getSTEMScores();
    return stars%3;
  }

  getNumberOfTrophys() {
    let trophies = this.getSTEMScores();
    return Math.floor(trophies/3);
  }

   faceButtonEvent() {
   this.navigate('/');
  }
}


module.exports = RewardsPage;
