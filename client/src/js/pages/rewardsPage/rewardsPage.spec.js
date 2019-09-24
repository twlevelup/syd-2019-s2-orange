const RewardsPage = require('./rewardsPage');

describe('#getIndividualScores', () => {
  it('should return 1 star/pt', () => {
    const page = new RewardsPage();
    expect(page.getNumberOfStars(1)).toEqual(1);
  })
})
