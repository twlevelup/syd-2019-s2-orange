const HomePage = require('./../homePage/homePage');
const ScreensaverPage = require('../screensaverPage/screensaverPage')

describe('#faceButtonEvent', () => {
  it('should take the user to the home page', () => {

    const page = new HomePage();
    spyOn(page, 'navigate');

    page.faceButtonEvent();
    expect(page.navigate).toHaveBeenCalledWith('/');
  });
});
