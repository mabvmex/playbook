class User {
  constructor (id, username, name, bio, dateCreated, lastUpdate) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.bio = bio;
    this.dateCreated = dateCreated;
    this.lastUpdate = lastUpdate;
  }
}

module.exports = User;