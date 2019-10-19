const BasePage = require('watch-framework').BasePage;
const Jamie = require('../../../images/jamie.png')
class ScreensaverPage extends BasePage{
  template = require('./screensaverPage.hbs');
  pageWillLoad() {
    this.Jamie = Jamie
  }

   faceButtonEvent() {
   this.navigate('/');
  }
}

module.exports = ScreensaverPage;
