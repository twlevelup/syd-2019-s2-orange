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
    // printStars();
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

  // printStars() {
  // var blueStarsDiv = document.querySelector("#stars");
  // for(let i = 0; i < this.stars; i++ ){
  //   var blStars = document.createElement("div");
  //   blStars.setAttribute("src", starBlue);
  //   blStars.style.height = "50px";
  //   blStars.style.width = "50px";
  //   blueStarsDiv.appendChild(blStars);
  // }
  // }

}


module.exports = RewardsPage;
