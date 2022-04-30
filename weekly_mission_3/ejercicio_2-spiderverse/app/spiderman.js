class Spiderman {
  constructor (name, age, actor, totalMovies, studio) {
    this.name = name;
    this.age = age;
    this.actor = actor;
    this.totalMovies = totalMovies;
    this.studio = studio;
  }
  getInfo() {
    return `Hey, I'm ${this.actor} from ${this.studio}`
  }
  
}

const andrewGarfield = new Spiderman("Spiderman Sony", 31, "andrew Garfield", 2, "Sony");
const TomHolland = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 5, 'Marvel Studios')

module.exports = Spiderman;