const Intern = require('../lib/Intern');

test('create intern object', () => {
  const intern = new Intern('Jane', 23468, 'jane.doe@acne.com', 'intern', 'U of M');

  expect(intern.school).toEqual(expect.any(String));
});

test("get school", () => {
  const intern = new Intern('Jane', 23468, 'jane.doe@acne.com', 'intern', 'U of M');

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test('get intern role', () => {
  const intern = new Intern('Jane', 23468, 'jane.doe@acne.com', 'intern', 'U of M');

  expect(intern.getRole).toEqual(expect.any('Intern'));
});
