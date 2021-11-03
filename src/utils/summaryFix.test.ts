import { summaryFix } from "./summaryFix";

test("summaryFix removes the <p> tags from input string", () => {
  expect(summaryFix("<p>loooooool</p>")).toBe("loooooool");
  expect(summaryFix("<p>game of thrones<p></p></p><br>")).toBe(
    "game of thrones"
  );
});
