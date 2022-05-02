const MissionCommander = require("./../app/missionComander");

describe("Unit test for Mission Commander Class", () => {
  test("prueba de Clase 1", () => {
    
    const myMissionCommander = new MissionCommander("Woppa");

    expect(myMissionCommander.name).toBe("Woppa");
  });
});
