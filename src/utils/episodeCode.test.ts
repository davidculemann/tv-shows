import { episodeCode } from "./episodeCode";

test("greet returns a string, greeting the passed name", () => {
  expect(episodeCode(1, 5)).toBe("S01E05");
  expect(episodeCode(10, 5)).toBe("S10E05");
  expect(episodeCode(100, 10)).toBe("S100E10");
});
