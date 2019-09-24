const BasePage = require('watch-framework').BasePage;

class CategoryPage extends BasePage {

  template = require('./categoryPage.hbs');

  rightButtonEvent() {
    this.navigate('quizListPage');
  }

}

module.exports = CategoryPage;
