// 1
// const obj = { a: 1, b: 2, c: 3 };
// const valuesArray = Object.values(obj);
// console.log(valuesArray);

//  2
// const obj = { a: 1, b: 2, c: 3 };
// const propertyName = 'b';
// const exists = obj.hasOwnProperty(propertyName);
// console.log(exists);

//  3
// const obj = { product1: 10, product2: 5, product3: 8 };
// const valuesArray = Object.values(obj);
// console.log(valuesArray.length);

//  4
// const grades = { Анна: 95, Иван: 88, Мария: 92 };
// const n = 90;
// const filteredGrades = Object.values(grades).filter(function(grade) {
//     return grade > n;
// });
// console.log(filteredGrades); 

//  5
// const obj = { яблоко: 'красное', банан: 'желтый', апельсин: 'оранжевый'}
// const entriesArray = Object.entries(obj);
// console.log(entriesArray);

//  6
// const obj = { a: 1, b: 2, c: 3 };
// const propertyName = 'a';
// const exists = Object.keys(obj).includes(propertyName);
// console.log(exists); 

//  8
// const number = 12345;
// const sum = String(number)
// .split('')
// .reduce(function(acc, curr, index) {
//     return acc + Math.pow(Number(curr), index);
// }, 0);
// console.log(sum)

//  9
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { b: 3, c: 4, d: 5 };
// const commonProperties = {};
// for (let key in obj1) {
//     if (obj2.hasOwnProperty(key)) {
//         commonProperties[key] = obj1[key];
//     }
// }
// console.log(commonProperties);

//  10
// const user = { name: 'Вероника', age: 18 };
// const { name, age } = user;
// console.log(name, age); 

//  11
const array = [10, 20, 30, 40];
const [first, second] = array;
console.log(first, second); 
