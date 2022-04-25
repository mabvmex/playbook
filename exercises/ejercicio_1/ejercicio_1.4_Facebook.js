const facebookUser = {
  name: 'mabvmex',
  picture: 'assets/avatar.jpg',
  background: 'assets/image.jpeg',
  IsVerified: false,
  botones: [
    followButton = function () {
      return `Siguiendo a ` // ${this.name}
    },
    suscribe = function () {
      return `Ahora estás suscrito al canal` // ${this.name}`
    }
  ]
}


const facebookPost = {
  picture: 'assets/avatar.jpg',
  name: 'mabvmex',
  IsVerified: false,
  createdAt: new Date(),
  status: 'public',
  postImg: 'assets/postImg.jpeg',
  reaction: [
    emoji_1 = "laught",
    emoji_2 = "like",
  ],
  coments: 250,
  shared: 1000,
  buttons: [
    likeButton = function() {
      return 'Le has dado a "Me gusta"'
    },
    commentButton = function() {
      return 'Escribe un comentario'
    },
    shareButton = function() {
      return 'Escribe un comentario'
    },
  ]
}

const facebookBiography = {
  backgroundImg: 'assets/postImg.jpeg',
  picture: 'assets/avatar.jpg',
  name: 'mabvmex',
  friends: 200,
  friendsList: ['Amigo 1', 'Amigo 2', 'Amigo 3' ],
  profileButtons: [
    addStory = function() {
      return 'Add Story'
    },
    editProfile = function() {
      return 'Edit your profile'
    }
  ]
}


console.log(`=== FacebookUser ===`);
console.log(`El nombre del usuario es: ${facebookUser.name}`);
console.log(`El usuario es un perfil verificado: ${facebookUser.verified}`);
console.log(facebookUser["botones"] );


console.log(`\n=== Post ===`);
console.log(`Post de: ${facebookPost.name}`);
console.log(facebookPost.postImg);
console.log(facebookPost["buttons"] );

console.log(`\n=== Biography ===`);
console.log(facebookBiography.name);
console.log(facebookBiography.backgroundImg);
console.log(facebookBiography.friends);
console.log(facebookBiography.friendsList);
console.log(facebookBiography['profileButtons']);