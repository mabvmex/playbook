const User = require("../../models/user");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio");
  }

  static getInfo(user) {
    return user = [1, 'mabvmex', 'Miguel', "Sin bio"];
  }

  static updateUserUsername(user, updatedName) {
    user.username = updatedName
    return (user)
  }

  static getAllUserNames([user1, user2, user3]) {
    const userslist = [user1.username, user2.username, user3.username]
    return userslist
  }
}

module.exports = UserService;
