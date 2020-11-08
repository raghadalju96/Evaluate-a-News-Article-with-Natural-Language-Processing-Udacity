import { is_url } from "../js/urlChecker";

describe("Testing the submit functionality", () => {
  test("Should be defined", () => {
    expect(is_url).toBeDefined();
  }),
    test("Should be a function", () => {
      expect(typeof is_url).toBe("function");
    });

  test("return true if the url is true", () => {
    const urls = [
      "https://example.com",
      "http://example.com",
      "example.com",
      "example.com/path",
      "https://www.example.com",
      "www.example.com",
    ];

    urls.forEach((url) => {
      expect(is_url(url)).toBeTruthy();
    });
  });

  test("return false if the url is false", () => {
    expect(is_url("#raghad")).toBeFalsy();
  });
});
