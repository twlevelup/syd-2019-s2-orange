const RewardsPage = require('./rewardsPage');

describe('#getIndividualScores', () => {
  it('should return 1 star/pt', () => {
    const page = new RewardsPage();
    expect(page.getNumberOfStars(1)).toEqual(1);
  })
})

describe('#getIndividualScores', () => {
  it('should return 3 star', () => {
    const page = new RewardsPage();
    expect(page.getNumberOfStars(13)).toEqual(3);
  })
})

describe('#getIndividualScores', () => {
  it('should return 2 trophys', () => {
    const page = new RewardsPage();
    expect(page.getNumberOfTrophys(13)).toEqual(2);
  })
})
