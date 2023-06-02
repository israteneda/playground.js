function sortList(unsortedList) {
  const sortedList = [];
  let prev = null;
  for (let i = 0; i < unsortedList.length; i++) {
    const current_num = unsortedList[i];
    if (prev === null) {
      sortedList.push(current_num);
      prev = current_num;
    }
    for (let j = 0; j < sortList.length; j++) {
      if (sortedList[j] < prev) {
        sortedList[i - 1] = sortList[j];
        sortedList.push(prev);
        prev = prev;
      }
    }
  }
  return sortList;
}

function main() {
  const unsortedList = [1, 5, 2, 3, 4];
  const sortedList = sortList(unsortedList);
  console.log(sortedList);
}

main();
