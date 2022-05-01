const UserService = require('./../../app/services/services');

describe("Tests for UserService", () => {
  test("1.- Create a new user using the UserService", () => {
    const user = UserService.create(1000, 'mabvmex', 'Miguel Barrera',)
    expect(user.username).toBe('mabvmex');
    expect(user.name).toBe('Miguel Barrera');
    expect(user.id).toBe(1000);
    expect(user.bio).not.toBeUndefined();
  });
});