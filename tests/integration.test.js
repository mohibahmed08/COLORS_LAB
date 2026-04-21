
const { extractColorList, hasValidSearchResponse } = require("../public/js/testable");

test("hasValidSearchResponse returns true for expected API structure", () => {
  const mockResponse = {
    results: ["blue", "green", "red"],
    error: ""
  };

  expect(hasValidSearchResponse(mockResponse)).toBe(true);
});

test("extractColorList formats results into HTML line breaks", () => {
  const results = ["blue", "green", "red"];
  expect(extractColorList(results)).toBe("blue<br />\r\ngreen<br />\r\nred");
});