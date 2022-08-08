/* 1 */

function createArr(sym, count) {
  let arr = [];
  for (i=0; i < count; i++) {
    arr.push(sym);
  }
  console.log(arr);
  return arr;
}

createArr('x', 10);

/* 2 */

function isNumberInRange(num) {
  return num > 0 && num < 10 ? true : false;
}

console.log( isNumberInRange(10));
console.log( isNumberInRange(1));
console.log( isNumberInRange(-1));
console.log( isNumberInRange(50));

/* 3 */

function isEven(num) {
  return num % 2 == 0 ? true : false;
}

console.log( isEven(1));
console.log( isEven(2));
console.log( isEven(3));
console.log( isEven(4));
console.log( isEven(5));

/* 4 */

function isEven(num) {
  return num % 2 == 0 ? true : false;
}

const intArr = [];

for (let i = 1; i <= 50; i++) {
  intArr.push(i);
}

const evenArr = intArr.filter(item => {
  if (isEven(item) == true) return item;
})

console.log(evenArr);

/* 5 */

function m(x, y) {
  return x**y;
}

console.log(m(5, 5));

/* 6 */

function access(age) {
  return age > 16 ? console.log("добро пожаловать") : console.log("вы еще молоды");
}

access(10);
access(18);

/* 7 */

function access(age) {
  if (age == null || age == undefined) return console.log("Введите возраст");
  return age > 16 ? console.log("добро пожаловать") : console.log("вы еще молоды");
}

access(10);
access(18);
access();

/* 8 */

let text = "There is two type of people";

function ucfirst(str) {
  let arr = str.split(" ");
  strNew = '';
  arr = arr.map((item, i) => {
    newItem = item[0].toUpperCase() + item.slice(1);
    return newItem;
  })

  arr = arr.join(" ");
  console.log(arr);
}

ucfirst(text);

/* 9 */

let text = "var_text_hello";

function ucfirst(str) {
  let arr = str.split("_");
  let strNew = '';
  
  console.log(arr);
  arr.forEach((item, i) => {  
    newItem = item;
    
    if (i > 0) {
      newItem = item[0].toUpperCase() + item.slice(1);        
    }
    
    return strNew += newItem;
  })

  console.log(strNew);
}

ucfirst(text);

/* 10 */

let testArr = ["var_text_hello", "car", "js", "JAVA", "money"];

function inArray(str, arr) {
  return arr.includes(str, 0);
}

console.log(inArray('text', testArr));
console.log(inArray('money', testArr));
console.log(inArray('house', testArr));
console.log(inArray('js', testArr));