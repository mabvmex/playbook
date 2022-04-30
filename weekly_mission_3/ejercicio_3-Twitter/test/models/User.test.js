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
});
