const twitterUser = {
 name: 'Beto Mou',
 username: 'moubet',
 bio: " programador iOS freelancer",
 website: "mou.bet",
 location: 'NY',
 following: 423,
 followers: 1845,
 followersList: ["maria", "daniel", "carlo"]
}

const trending_topic = {
  numberList: 1,
  section: 'tecnología',
  hashtag: 'javascript',
  post: [
    title = 'lenguajes de programación',
    desc = 'Lenguajes de programación más usados',
    image = 'logo.jpg'
  ],

}

const hashtag = {
  title: 'Tema relacionado',
  titleDesc: 'ver tweets destacados',
  hashTopic: 'halo',
  category: 'videogames',
  seguir: function() {
    return `seguir ${this.title} con ${this.hashTopic}`
  },
}

console.log(`=== twitterUser ===`);
console.log(`El nombre del usuario es: ${twitterUser.name}`);
console.log(`El username del usuario es: ${twitterUser.username}\n`);

console.log(`=== trendingTopic ===`);
console.log(trending_topic.numberList);
console.log(trending_topic.section);
console.log(trending_topic.hashtag);
console.log(`${trending_topic.post}\n`);

console.log(`=== hashtag ===`);
console.log(hashtag.title);
console.log(hashtag.titleDesc);
console.log(hashtag.hashTopic);
console.log(hashtag.category);
console.log(hashtag.seguir());
