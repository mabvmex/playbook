class User {
  constructor(id, username, name, bio, dateCreated, lastUpdate) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.bio = bio;
    this.dateCreated = new Date();
    this.lastUpdate = new Date();
  }

  get getUsername() {
    return this.username;
  }
  get getName() {
    return this.name;
  }
  get getBio() {
    return this.bio;
  }
  get getDateCreated() {
    return this.dateCreated;
  }
  get getLastUpdate() {
    return this.lastUpdate;
  }


  set setUsername(newUsername) {
    this.username = newUsername
  }

  set setBio(newBio) {
    this.bio = newBio
  }

}

module.exports = User;
