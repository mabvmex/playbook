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