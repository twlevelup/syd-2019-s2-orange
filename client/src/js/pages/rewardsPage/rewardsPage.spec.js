const RewardsPage = require('./rewardsPage');

describe('#getIndividualScores', () => {
  it('should return 1 star/pt', () => {
    const page = new RewardsPage();
    expect(page.getNumberOfStars(1)).toEqual(1);
  })
})

describe('#getIndividualScores', () => {
  it('should return 1 star because 12pts are 4 trophys', () => {
    const page = new RewardsPage();
    expect(page.getNumberOfStars(13)).toEqual(1);
  })
})

describe('#getIndividualScores', () => {
  it('should return 4 trophys and final point is one star', () => {
    const page = new RewardsPage();
    expect(page.getNumberOfTrophys()).toEqual(8);
  })
})

describe('#makeSureFuncIsTalkingToStorage', () => {
  it('should return 25', () => {
    const page = new RewardsPage();
    expect(page.getSTEMScores()).toEqual(25);
  })
});
