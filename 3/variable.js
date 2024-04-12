'use strict'; //꼭 선언해주기

//2. Variable
// let (added in ES6) 변수를 만드는 키워드
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
//console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top 아래 선언해도 위로 올려줌)
// has no block scope (block 범위 사용 불가)
{
  age = 4;
  var age;
}
console.log(age);

// 3. Contants (한번 값을 할당하면 값이 절대 바뀌지 않는 아이)
// 가리키고 있는 포인터가 잠겨있음. 다시는 값을 변경할 수 없음
// immutable 데이터 타입(바뀌지 않는 데이터 타입)
// security, thread safety, reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
// primitive, single(더이상 작은 단위로 나뉘어질 수 없는 데이터 타입) : number, string, boolean, null, undefied, symbol
// object, box container(싱글타입들을 한 오브젝트로 묶어서 한 단위로 한 박스로 관리할 수 있게 해주는 것)
//보통 위 두 타입으로 나뉘어져 있음.
// function, first-class function (이 프로그래밍 언어에서는 function도 다른 데이터 타입처럼 변수에 할당이 가능하고, 함수의 parameter인자로도 전달, 함수에서도 리턴타입으로 펑션을 리턴 가능함.)

//js는 상관없이 타입은 number로 나옴.
const count = 17; //integer
const size = 17.1; // decimal number(소수점)
console.log('value: ${count}, type: ${typeof count}')
console.log('value: ${size}, type: ${typeof size}')

// number - speical numeric values: infinity, -infinity, Nagativeinfinity;
const infinity = 1 / 0;
const Nagativeinfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(Nagativeinfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet 크롬 파이어폭스에서만 사용중) 숫자 바로 끝에 n만 붙이면 bigInt로 간주.
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log('value: ${bigInt}, type: ${typeof bigInt}');

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log('value: ${greeting}, type: ${typeof greeting}');
const helloBob = 'hi ${brenan}!'; // template literals (string) 저렇게 쓰면 {}안 변수의 값 붙여서 출력된다.
console.log('value: ${helloBob}, type: ${typeof helloBob}');
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, yundefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false
console.log('value: ${canRead}, type: ${typeof canRead}');
console.log('value: ${test}, type: ${typeof test}');

//3강 19:20부터 들으시오