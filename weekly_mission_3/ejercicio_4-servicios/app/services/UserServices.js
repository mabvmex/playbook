const User = require("../../models/user");

class UserService {
  static create(id, username, name) {
    return new User(id, username, name, "Sin bio");
  }

  static getInfo(user) {
    return user = [1, 'mabvmex', 'Miguel', "Sin bio"];
  }

}

module.exports = UserService;
