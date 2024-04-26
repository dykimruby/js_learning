'use strict';
// Objects
// one of the JavaScripts's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

//const name = 'ellie'; //primitive 타입=> 변수하나당 값 하나만
//const age = 4;
//print(name, age); //출력하고 싶으면 이름과 나이를 각각 써줘야한다.
//function print(name, age){//함수를 정의할 때에도 두가지의 파라미터를 받아오도록 써줘야함.
//  consle.log(name);
//  consle.log(age);
//}; 

//=> 이렇게 해주면 문제가 조금 더 인자가 많아지게 되면 추가해줘야하는 게 많고 관리 어려움. 이것을 개선하고자 오브젝트를 쓴다!!



// 1. Literals and properties
// object = { key : value };
// 오브젝트는 우리가 접근할 수 있는 key 변수 property와 그 property가 가지고 있는 값 value

const obj1 = {}; // 'object literal' syntax: 클래스없이 {}를 이용해서 할 수도 있고
const obj2 = new Object(); // 'object constructor' syntax: new키워드와 클래스를 이용해서 

function print(person) { // person이라는 데이터를 받아서
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 }; //ellie 오브젝트로 관리 이름과 나이
// 2가지의 key와 거기에 상응하는 값2개
print(ellie);

// can add properties later
ellie.hasJob = true; // 뒤늦게 정보 추가도 가능. (자바스크립트의 동적으로 타입이 런타입때 결정되므로)
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob; // 삭제도 가능
console.log(ellie.hasJob); // undefined



// 2. Computed properties
// key는 항상 String
console.log(ellie.name); //오브젝트 안에 있는 데이터 접근하는 법1 : .
console.log(ellie['name']); // 다른 방법2 : []를 이용해서 오브젝트 안에 있는 변수의 이름을 스트링 형태로 접근 가능!! **주의 key는 항상 'string타입'으로 받아오기 name(x) 'name'(o)
ellie['hasJob'] = true; //다시 할당가능
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');



// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);



// 4. Constructor Function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}



// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
  console.log(value);
}



// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
console.log(user);

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);