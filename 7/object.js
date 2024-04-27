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
  console.log(obj[key]); //obj.key (X) 뭐인지 모를 때 []로 접근가능
}
printValue(ellie, 'name'); //다양한 key들을 변경해서 출력가능
printValue(ellie, 'age');



// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('elile', 30);
console.log(person4);



// 4. Constructor Function
function Person(name, age) {
  // this = {}; //this라는 새로운 오브젝트를 만드는 것이 생략된 것.
  this.name = name;
  this.age = age;
  // return this;
}



// 5. in operator: property existence check (key in obj) 해당하는 오브젝트 안에 키가 있는지 없는지 확인하는 것.
console.log('name' in ellie); //t
console.log('age' in ellie); //t
console.log('random' in ellie); //f
console.log(ellie.random); //undefined

// 6. for..in vs for..of
// for (key in obj)
console.clear(); // 이전의 로그들을 다 지워봄. (이전 것들 다 지워짐 그 후에 것만 출력됨.)
for (let key in ellie) { // name age hasJob
  console.log(key); // ellie 안에 있는 모든 key들 출력
}

// for (value of iterable) => 오브젝트를 쓰는게 아니라, 배열과 같은 배열 리스트(순차적으로 iterable한 것을 쓰는 것.)
const array = [1, 2, 4, 5]; //순차적으로 데이터가 담겨있음.
for (let value of array) { // 이렇게하면 array에 있는 모든 값들이 value에 할당됨.
  console.log(value);
}
//같은 코드인데 번거로움. 위처럼 for of쓰는 것이 조금 더 쉽다.
// for(let i = 0; i < array.length; i++) { 
//  console.log(array[i]);
// }



// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' }; //user라는 오브젝트를 만들어놓고
const user2 = user; //user2->user를 가리키게 함.
console.log(user);

// user ->ref(레퍼런스)->ellie, 20
// user2->ref(레퍼런스)->
//만약 user2.name = 'coder';로 바꾸면, user를 출력했을 때 똑같이 ellie가 아닌 coder가 출력됨.

// old way
const user3 = {}; //비어있는 오브젝트
for (let key in user) { //오브젝트를 돌면서 수동적으로 할당
  user3[key] = user[key]; //1번 key인 name => property인 ellie 할당, 2번 key : age
}
console.clear();
console.log(user3);

//다른 방법 Object에 있는 assign 사용
//Object : 자바스크립트에 있는 기본적으로 탑재 되어있는 오브젝트중에 하나, 자바스크립트에 있는 모든 오브젝트들은 이 Object를 상속한다!!
const user4 = Object.assign({}, user); //리턴값을 받아와서 작성해도 됨.
console.log(user4);
// 이 코드와도 같다
// const user4 = {}
// Object.assign(user4, user);
// console.log(user4);

//** Ctrl키 누르면, 함수가 정의된 곳으로 이동할 수 있고, 새로운 함수나 api를 사용할 때 어떤 인자(피라미터)를 전달해서 어떤 값이 리턴되는지 확인하면서 쓰면 좋다!
// assign은 복사하고자하는 타겟(target)과 복사를 하려고하는 소스(source1,source2,... 1개이상 or 배열도 가능)를 같이전달해줘야함.


// another example
// color는 동일, size라는 새로운 property가 있음.
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
//위 2개를 섞은 mixed라는 변수
const mixed = Object.assign({}, fruit1, fruit2); //여러개의 소스 전달
console.log(mixed.color); //blue -> assign은 뒤에 나오는 아이(계속 덮어씌움.)
console.log(mixed.size); //big