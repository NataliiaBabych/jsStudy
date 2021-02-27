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

// Module 3

// Ex 1

// const apartment = {
// imgUrl: 'https://via.placeholder.com/640x480',
// descr: 'Просторная квартира в центре',
// rating: 4,
// price: 2153,
// tags: ['premium', 'promoted', 'top'],
// }

// Ex 2

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//     owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//     },
//   };

// Ex 3

// const apartment = {
//     imgUrl: 'https://via.placeholder.com/640x480',
//     descr: 'Просторная квартира в центре',
//     rating: 4,
//     price: 2153,
//     tags: ['premium', 'promoted', 'top'],
//   };
  
//   // Пиши код ниже этой строки
//   const aptRating = apartment.rating;
//   const aptDescr = apartment.descr;
//   const aptPrice = apartment.price;
//   const aptTags = apartment.tags;
//   // Пиши код выше этой строки


// Ex 4

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Пиши код ниже этой строки
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];
// // Пиши код выше этой строки

// Ex 5

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Пиши код ниже этой строки
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Пиши код выше этой строки

// Ex 6

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Генри',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Генри Сибола';
// apartment.tags.push('trusted');

// Ex 7

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }
// };

// // Пиши код ниже этой строки
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
// country: 'Ямайка',
// city: 'Кингстон',
// };

// Ex 8

// const name = 'Ремонтный дроид';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Пиши код ниже этой строки
// name,
// price,
// image,
// tags,
//   // Пиши код выше этой строки
// };

// Ex 9

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Пиши код ниже этой строки
//  [emailInputName]: 'henry.carter@aptmail.com',
//  [passwordInputName]: 'jqueryismyjam',
//   // Пиши код выше этой строки
// };

// Ex 10

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки
// for (const key in apartment){
// keys.push(key);
// values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);


// Ex 11

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Просторная квартира в центре';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Пиши код ниже этой строки
// if(apartment.hasOwnProperty(key)){
//   keys.push(key);
//   values.push(apartment[key]);
// }

//   // Пиши код выше этой строки
// }


// Ex 12

// function countProps(object) {
//   let propCount = 0
//   // Пиши код ниже этой строки
//     for (const key in object) {
    
//     if (object.hasOwnProperty(key)) {
//     propCount += 1;
//     }
//     }
//   // Пиши код выше этой строки
//   return propCount;
// }

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// Ex 13

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (key of keys) {
// values.push(apartment[key]);
// }


// Ex 14

// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;

// const keys = Object.keys(object);
//   for (key of keys) {
//       propCount += 1;
//     }
  
//   return propCount;
//   // Пиши код выше этой строки
// }


// Ex 15

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);


// Ex 16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки

//   const values = Object.values(salaries);
//   for (value of values) {
//     totalSalary += value;
//   }
//   // Пиши код выше этой строки
//   return totalSalary;
// }

// Ex 17

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const color of colors) {
// hexColors.push(color.hex);
// rgbColors.push(color.rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);


// Ex 18

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//     for (let product of products) { 
//         if (product.name === productName) { 
//             return product.price;
//         }
//     }
//     return null;
  
//   // Пиши код выше этой строки
// }


// Ex 19

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     let arrayOfValues = [];
//     for (let product of products) {
//         if (Object.keys(product).includes(propName)) {
//             arrayOfValues.push(product[propName]);
//         }
//     }
//     return arrayOfValues;
// }
     
//   console.log(getAllPropValues('name'));  


// Ex 20

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//     let totalPrice = 0;
//     for (const product of products) { 
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//          }
//     }

//     return totalPrice;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice('Сканер'));

// Ex 21


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday, today, tomorrow } = highTemperatures;
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Ex 22

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// Ex 23

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки

// const { yesterday: highYesterday, today:  highToday, tomorrow: highTomorrow, icon: highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' } = highTemperatures;

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Ex 24

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const { hex, rgb} of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }


// Ex 25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// Пиши код ниже этой строки

// const { today: { low: lowToday, high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' },
//     tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg' }, } = forecast;

// Ex 26

// function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh},} = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// Ex 27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// Ex 28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// Ex 29

// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {...defaultSettings, ...overrideSettings};


// Ex 30

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
    const { category, priority, text} = data;
  // Пиши код выше этой строки
}
console.log(makeTask({ category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор' }));

// Ex 31
//  function calculateMeanTemperature(forecast) {
//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh},} = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }