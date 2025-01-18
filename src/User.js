const { username, city, image } = require('../data/user.js');  // Make sure the path is correct

test("username, city, and image are all exported", () => {
  expect(username).toEqual("Liza");
  expect(city).toEqual("New York");
  expect(image).toEqual("https://i.imgur.com/mV8PQxj.gif");
});
