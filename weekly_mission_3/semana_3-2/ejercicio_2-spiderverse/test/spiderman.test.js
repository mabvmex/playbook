const Spiderman = require('./../app/spiderman');

describe('Unit Test for spiderman Class', () => {
  test('1). Create a spiderman object', () => {

    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "andrew Garfield", 2, "Sony")
    expect(andrewGarfield.name).toBe('Spiderman Sony');
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe('andrew Garfield');
    expect(andrewGarfield.totalMovies).toBe(2);
    expect(andrewGarfield.studio).toBe('Sony');
  });
});

describe('Unit Test for Spiderman Class', () => {
  test('2). Create a Method to get info', () => {
    const TomHolland = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 5, 'Marvel Studios')
    expect(TomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studios")
  })
})