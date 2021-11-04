import { imageURLFix } from "./imageURLFix";

test("Replace null medium with a stock image", () => {
  expect(imageURLFix("null")).toBe(
    "https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg"
  );
  expect(
    imageURLFix(
      "https://www.tvmaze.com/episodes/1623966/game-of-thrones-8x04-the-last-of-the-starks"
    )
  ).toBe(
    "https://www.tvmaze.com/episodes/1623966/game-of-thrones-8x04-the-last-of-the-starks"
  );
});
