const User = require("./../../app/models/User");

describe("UNIT TESTS FOR USER CLASS", () => {
  test("Create an User object", () => {
    const user = new User(
      1,
      "juanito-pistolas",
      "Juan López",
      "Vibrando Alto",
      "dateCreated",
      "lastUpdate"
    );

    expect(user.id).toBe(1)
    expect(user.username).toBe('juanito-pistolas')
    expect(user.name).toBe('Juan López')
    expect(user.bio).toBe('Vibrando Alto')
    expect(user.dateCreated).not.toBeUndefined()
    expect(user.lastUpdate).not.toBeUndefined()
  });


  test("Test with getters", () => {
    const userget = new User(
      2,
      "carlogilmar",
      "carlo",
      "bio",
      "dateCreated",
      "lastUpdate",
    );
    
    
    expect(userget.getUsername).toBe('carlogilmar')
    expect(userget.getName).toBe('carlo')
    expect(userget.getBio).toBe('bio')
    expect(userget.getDateCreated).not.toBeUndefined()
    expect(userget.getLastUpdate).not.toBeUndefined()
  });


  test('test with setters', () => {
    const userset = new User (
      3,
      'mabvmex',
      'Miguel',
      'Link en mi bio',
    );
    
    userset.setbio = 'nueva bio > viedeo en el youtube azul'
    expect(userset.setbio).toBe('nueva bio > viedeo en el youtube azul')
    
    userset.setUsername = 'angel';
    expect(userset.username).toBe('angel')
    
  })
});
