const uberProfile = {
  profileIMG: "assets/img.jpg",
  telephone: "Mou",
  name: "Mou",
  lastname: "Dev",
  location: "México",
  language: "Español (México)",
  email: 'mabvmex@gmail.com',
  guardarCambios: function() {
    return 'Cambios guardados'
  }
};

const travel = {
  beginTravel: "lugar de inicio",
  destination: "destino",
  viewMap: true,
  startTravel: function() {
    return 'Inicia viaje'
  },
  locationRealTime: function() {
    return 'Ubicación en tiempo real activada'
  }
};


console.log(`=== uberProfile ===`);
console.log(`El nombre del usuario es: ${uberProfile.name}`);
console.log(`El usuario se encuentra en: ${uberProfile.location}\n`);

console.log(`=== uberTravel ===`);
console.log(travel.beginTravel);
console.log(`${travel.destination}\n`);
console.log(`${travel.startTravel()}\n`);
console.log(`${travel.locationRealTime()}\n`);

