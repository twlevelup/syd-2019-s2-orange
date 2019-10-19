const HomePage = require('./homePage');
const StorageHub = require('watch-framework').StorageHub;
const AudioHub = require('watch-framework').AudioHub;
const ScreensaverPage = require('../screensaverPage/screensaverPage');

describe('HomePage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

 describe('#rightButtonEvent', () => {
    it('should go to screensaver page', () => {
      const page = new HomePage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('screensaver');
    });
  });

  describe('#faceButtonEvent', () => {
  it('should take the user to the home page', () => {
    const props = {
      navigate: () => { },
    };

    const page = new HomePage(props);
    spyOn(page, 'navigate');

    page.faceButtonEvent();
    expect(page.navigate).toHaveBeenCalledWith('/');
  });
});


  describe('#bottomButtonEvent', () => {
    it('go to rewards page', () => {

      const page = new HomePage();
      spyOn(page, 'navigate');

      page.bottomButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('rewards');

    });
  });

  describe('#topButtonEvent', () => {
    it('go to category page', () => {

      const page = new HomePage();
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('category');

    });
  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays calls clock-time if its in the window', () => {
      const page = new HomePage();

      watchFace.innerHTML = page.render();

      jest.spyOn(page,"getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(1);
    });
  });

  describe('#updateTimeDisplay', () => {
    it('updateTimeDisplays does not call clock-time if its not in the window', () => {
      const page = new HomePage();

      jest.spyOn(page,"getDateTime");
      page.updateTimeDisplay(page.getDateTime);
      expect(page.getDateTime).toHaveBeenCalledTimes(0);
    });
  });

  describe('#updateTimeEverySecond', () => {
    it('update time display gets called three times in 3000 ms', () => {
      const page = new HomePage();

      spyOn(page, 'updateTimeDisplay');

      jest.useFakeTimers();
      page.updateTimeEverySecond();
      jest.runTimersToTime(3000);

      expect(page.updateTimeDisplay).toHaveBeenCalledTimes(3);
    });
  });
});
