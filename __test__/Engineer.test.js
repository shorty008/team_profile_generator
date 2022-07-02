const Engineer = require("../lib/Engineer");

test("create engineer object", () => {
  const engineer = new Engineer("Jane", 2468, "jane.doe@acne.com", "jdoe");

  expect(engineer.github).toEqual(expect.any(String));
});

test("get engineers github user", () => {
  const engineer = new Engineer("Jane", 2468, "jane.doe@acne.com", "jdoe");

  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test("get engineer role", () => {
  const engineer = new Engineer("Jane", 2468, "jane.doe@acne.com", "jdoe");

  expect(engineer.getRole()).toEqual(Enigneer);
});
