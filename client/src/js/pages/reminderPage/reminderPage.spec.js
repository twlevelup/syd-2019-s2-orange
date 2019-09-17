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
      expect(page.render()).toContain("<h1>Interesting Fun Facts</h1>");
    });
    it('should contain fun facts', () => {
      const page = new ReminderPage();
      expect(page.render()).toContain("Gravity was found by Newton");
    });
  });

});
