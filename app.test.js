const utilities = require("./utilities");

test("epochToDateTime returns a well-formatted date for today", () => {
  expect(utilities.epochToDateTime(Date.now() / 1000)).toBe(
    new Date().getDate() +
      " " +
      new Date().toLocaleString("default", { month: "short" }) +
      ", " +
      new Date().getFullYear()
  );
});
