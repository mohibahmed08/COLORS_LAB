const { formatColorName, buildAddColorPayload } = require("../public/js/testable");

test("formatColorName trims spaces and converts to lowercase", () => {
  expect(formatColorName("  Blue  ")).toBe("blue");
});

test("buildAddColorPayload creates the correct payload object", () => {
  expect(buildAddColorPayload("  Red  ", 7)).toEqual({
    color: "red",
    userId: 7
  });
});