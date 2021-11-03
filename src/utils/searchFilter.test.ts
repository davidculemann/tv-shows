import { searchFilter } from "./searchFilter";

test("Returns unchanged array if seach is empty or array of elements which include the search term", () => {
  expect(searchFilter({ "name": "The Kingsroad", "summary": "the Kingsroad" }, "Kingsroad")).toBe(true);
  expect(searchFilter({ "name": "Winter is Coming", "summary": "the Kingsroad" }, "Kingsroad")).toBe(true);
  expect(searchFilter({ "name": "Winter is Coming", "summary": "the potato" }, "Kingsroad")).toBe(false);
});