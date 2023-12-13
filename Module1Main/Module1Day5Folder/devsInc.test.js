 const JamesB = require('./script.js');

 test("The number should land within the selected dice range", () => {
     expect(JamesB(6)).toBe(true);
   });