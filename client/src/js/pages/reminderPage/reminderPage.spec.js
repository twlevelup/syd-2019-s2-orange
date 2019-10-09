const ReminderPage = require('./reminderPage');

describe('ReminderPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my reminder page', () => {
      const page = new ReminderPage();
      page.pageWillLoad();
      expect(page.render()).toContain('<h1>Fun Facts</h1>');
    });

    it('should contain fun facts', () => {
      const page = new ReminderPage();
      page.pageWillLoad();
      expect(page.render()).not.toContain(`<p id="fact"></p>`);
    });
  });

  describe('#leftButtonEvent', () => {
    it('goes to root page', () => {
      const page = new ReminderPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

});
