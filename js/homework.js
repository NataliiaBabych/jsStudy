// HW
// Module 2 
// ex9

// function getExtremeElements(array) {
//   let firstAndLast = [array[0], array[array.length - 1]];
//   return firstAndLast;
//   }

// console.log(getExtremeElements(['яблоко', 'персик', 'груша', 'банан']));

// ex10

// function splitMessage(message, delimeter) {
//   let words = message.split(delimeter);
//   return words;
// }

// console.log(splitMessage('Манго спешит на поезд', ' '));

// ex11
// function calculateEngravingPrice(message, pricePerWord) {

//     let words = message.split(' ');
//     let totalPrice = words.length *pricePerWord;
//     return totalPrice;
// }
// console.log(calculateEngravingPrice('JavaScript у меня в крови', 20));

// ex12

// function makeStringFromArray(array, delimeter) {
  
//   // Пиши код ниже этой строки
 
//  let string = array.join(delimeter);
 
//   // Пиши код выше этой строки
//   return string;
// }


// ex13

//     function slugify(title) {
//   // Пиши код ниже этой строки
//         let slug = title.toLowerCase().split(' ').join('-');
//         return slug;
//   // Пиши код выше этой строки
// }
// console.log(slugify('Массивы для новичков'));

// // ex14

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// ex15

// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

// ex16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки

//     let newArray = firstArray.concat(secondArray);
    
//     if (newArray.length > maxLength) { 
//         let newArrayCut = newArray.slice(0, maxLength);
//         return newArrayCut;
//     } 
    
//     return newArray;
//     // Пиши код выше этой строки
// }
  
// console.log(makeArray(['Манго', 'Поли'], ['Аякс', 'Челси'], 3));

// ex17

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }

// ex18
// function calculateTotal(number) {

//     let counter = 0;
//     for (let i = 0; i <= number; i += 1) {
//         counter += i;
//     }
//     return counter;
// }
    
// console.log(calculateTotal(7));

// ex19

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }
// ex20

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//     for (let i = 0; i < order.length; i += 1) {
//         total += order[i]; 
//     }
//   // Пиши код выше этой строки
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ex21

// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//    if (!string) {
//     return 'ERROR!!!!!';
//   }
//   const words = string.split(' ');
//   let biggest = words[0];
//   for (let i = 1; i < words.length; i += 1) {
//     if (biggest.length < words[i].length) {
//       biggest = words[i];
//     }
//   }
//   return biggest;
  
//   // Пиши код выше этой строки
// }

// ex22


// function createArrayOfNumbers(min, max) {

//      const numbers = [];
//   // Пиши код ниже этой строки
//   for(let i=min; i <=max; i+=1) {
//    numbers.push(i)}
    
//   // Пиши код выше этой строки
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));

// // ex23

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки

//  const newNumbers = [];

//   for (const element of numbers) {
//     if (element > value) {
//       newNumbers.push(element);
//     }
//   }
//   return newNumbers;
//   // Пиши код выше этой строки
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// // ex24

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

//   return fruits.includes(fruit); // Дополни эту строку
// }

// ex25

// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки

//  const newArray = [];

//   for (const element of array1) {
//     if ( array1.includes(element) && array2.includes((element))) {
//       newArray.push(element);
//     }
//   }
//   return newArray;
  

// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// ex26

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let item of order) {
//     total += item;
//   }

//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));

// ex27

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];

//   for (const number of numbers) {

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// ex28

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// ex29

// function getEvenNumbers(start, end) {
   
//     const evenNumbers = [];

//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i)
//         }
//     }

//     return evenNumbers;
// }
// console.log(getEvenNumbers(3, 11));
  
 
// ex30

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//       number = i;
//       break;
//   }
// }

// ex31

// function findNumber(start, end, divisor) {
//   // Пиши код ниже этой строки
//   let item;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//         item = i;
//         return item;
//     }
//   }

//   return item;
//   // Пиши код выше этой строки
// }
// console.log(findNumber(8, 17, 3));

// ex32

// function includes(array, value) {
//   // Пиши код ниже этой строки

//     for (const item of array) { 
//         if (item === value) { 
//             return true;
//         } 
//     }
//     return false;
  
//   // Пиши код выше этой строки
// }
// console.log(includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран'));
