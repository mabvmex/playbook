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
    const user = new User(
      2,
      "carlogilmar",
      "carlo",
      "bio",
      "dateCreated",
      "lastUpdate"
    );
    
    expect(user.getUsername).toBe('carlogilmar')
    expect(user.getName).toBe('carlo')
    expect(user.getBio).toBe('bio')
    expect(user.getDateCreated).not.toBeUndefined()
    expect(user.getLastUpdate).not.toBeUndefined()
  });
});
