function processArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        result.push(arr[i] * arr[i]);
      } else {
        result.push(arr[i] * 3);
      }
    }
    return result;
  }
  let numbers = [1, 2, 3, 4, 5, 6];
console.log(processArray(numbers));


function formatArrayStrings(strings, numbers) {
  for (let i = 0; i < strings.length; i++) {
    if (numbers[i] % 2 === 0) {
      strings[i] = strings[i].toUpperCase();
    } else {
      strings[i] = strings[i].toLowerCase();
    }
  }
  return strings;
}

let strings = ["Stanley", "fish", "Wool", "table","push"];
let numberss = [1, 2, 3];
console.log(formatArrayStrings(strings, numbers));