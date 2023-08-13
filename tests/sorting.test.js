const sortList = require("../sorting");

test("sortList sorts a list of numbers, simple case", () => {
  const unsortedList = [5, 3, 1, 2, 4];
  const sortedList = [1, 2, 3, 4, 5];
  expect(sortList(unsortedList)).toEqual(sortedList);
});

test("sortList sorts a list of numbers, complex case", () => {
  const unsortedList = [5, 3, 1, 2, 4, 6, 7, 8, 9, 10];
  const sortedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(sortList(unsortedList)).toEqual(sortedList);
});

test("sortList sorts a list of numbers, negative numbers", () => {
  const unsortedList = [-5, -3, -1, -2, -4, -6, -7, -8, -9, -10];
  const sortedList = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1];
  expect(sortList(unsortedList)).toEqual(sortedList);
});

test("sortList sorts a list of numbers, duplicates", () => {
  const unsortedList = [5, 3, 1, 2, 4, 6, 7, 3, 8, 9, 10, 1];
  const sortedList = [1, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
  expect(sortList(unsortedList)).toEqual(sortedList);
});
