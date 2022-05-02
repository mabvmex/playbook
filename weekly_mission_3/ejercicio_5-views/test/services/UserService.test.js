const UserService = require('../../app/services/UserServices');

describe("Tests for UserService", () => {
  test("1.- Create a new user using the UserService", () => {
    const user = UserService.create(1000, 'mabvmex', 'Miguel Barrera',)
    expect(user.username).toBe('mabvmex');
    expect(user.name).toBe('Miguel Barrera');
    expect(user.id).toBe(1000);
    expect(user.bio).not.toBeUndefined();
  });


  test("2.- Get all user data in a list", () => {
    const user = UserService.create(1, "mabvmex", "Miguel")
    const userInfoList = UserService.getInfo(user)

    expect(userInfoList[0]).toBe(1)
    expect(userInfoList[1]).toBe("mabvmex")
    expect(userInfoList[2]).toBe('Miguel')
    expect(userInfoList[3]).toBe("Sin bio")
  });

  test("3.- Update username", () => {
    const user = UserService.create(1, "mabvmex", "Miguel");
    UserService.updateUserUsername (user, 'Miguelog');
    
    expect(user.username).toBe('Miguelog')
  });

  test('4.- Given a list of users, give me the list of usernames', () => {
    const user1 = UserService.create(1,"carlogilmar1", "carlo");
    const user2 = UserService.create(2,"carlogilmar2", "carlo");
    const user3 = UserService.create(3,"carlogilmar3", "carlo");

    const usernames = UserService.getAllUserNames([user1, user2, user3]);

    expect(usernames).toContain("carlogilmar1")
    expect(usernames).toContain("carlogilmar2")
    expect(usernames).toContain("carlogilmar3")
  });
});