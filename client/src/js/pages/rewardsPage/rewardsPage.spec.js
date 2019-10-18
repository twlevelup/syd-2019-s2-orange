const RewardsPage = require('./rewardsPage');
const StorageHub = require('watch-framework').StorageHub;

describe('#getIndividualScores', () => {
  it('should return 1 star/pt', () => {
    const page = new RewardsPage();
    const score = 25;
    StorageHub.setData('STEM', score )
    expect(page.getNumberOfStars()).toEqual(1);
  })
})

describe('#getIndividualScores', () => {
  it('should return 1 star because 12pts are 4 trophys', () => {
    const page = new RewardsPage();
    const score = 25;
    StorageHub.setData('STEM', score )
    expect(page.getNumberOfStars()).toEqual(1);
  })
})

describe('#getIndividualScores', () => {
  it('should return 8 trophys and final point is one star', () => {
    const page = new RewardsPage();
    const score = 25;
    StorageHub.setData('STEM', score )
    expect(page.getNumberOfTrophys()).toEqual(8);
  })
})

describe('#makeSureFuncIsTalkingToStorage', () => {
  it('should return 25', () => {
    const page = new RewardsPage();
    const score = 25;
    StorageHub.setData('STEM', score )
    expect(page.getSTEMScores()).toEqual(25);
  })
});
