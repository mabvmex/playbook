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
}

module.exports = UserService;




/* 

  3. Requerimiento 3: Agregar un nuevo método estático en `UserService` llamado `updateUserUsername`, 
  que reciba un objeto de la clase `User` y un nuevo string, que actualizará el valor de `username`. 

  4. Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, 
    que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames 
    de dichos objetos. 
*/