ratings = [];
for (let i = 0; i < 10; i++) {
  ratings.push(Math.floor(Math.random() * 11 + 10));
}

console.log(ratings);

function sum(list) {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result;
}

function average(list) {
  // return sum(list) / list.length;
  return list.reduce((a, b) => a + b, 0) / list.length;
}

console.log(average(ratings));
