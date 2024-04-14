'use strict'; //꼭 선언해주기

//2. Variable, rw(read/write)=>메모리를 읽고 쓰는 것이 가능
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

// 3. Constant (한번 값을 할당하면 값이 절대 바뀌지 않는 아이), r(read only)=>읽기만 가능
// 가리키고 있는 포인터가 잠겨있음. 다시는 값을 변경할 수 없음
// immutable 데이터 타입(바뀌지 않는 데이터 타입)
// security, thread safety, reduce human mistakes
//>> 앞으로 변수의 값이 바뀌어야하는 좋은 이유가 없다면 웬만해서는 Constant 사용
const daysInWeek = 7;
const maxNumber = 5;

//Note!
// Immutable data types: primitive type, frozen objects (i. e. object.freeze())
// Mutable data types: all objects by default are mutable in JS (변경이 가능)
// favor immutable data type always for a few reasons:
// - security
// - thread safety 
//- reduce human mistakes


//4. Variable types
// primitive, single(더이상 작은 단위로 나뉘어질 수 없는 데이터 타입) : number, string, boolean, null, undefied, symbol
// object, box container(싱글타입들을 한 오브젝트로 묶어서 한 단위로 한 박스로 관리할 수 있게 해주는 것)
//보통 위 두 타입으로 나뉘어져 있음.(메모리 저장방식)
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

// null (아무것도 아닌 텅텅비어있는 값)
let nothing = null;
console.log('value: ${nothing}, type: ${typeof nothing}');

// undefined (선언되어있지만 값이 정해져있지 않은 것)
let x;
console.log('value: ${x}, type: ${typeof x}');

// symbol, create unique indentifiers for objects (고유한 식별자가 필요하거나 동시다발적으로 일어나는 코드에서 우선순위를 주고 싶을 때 고유한 식별자로 간주할 수 있게 하는 것 동일한 id로 해도 다른 심볼로 인식. string은 불가 => 즉, string에 상관없이 고유한 식별자를 줄 때 사용. )
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id'); // Symbol.for 동일한 심볼을 만들고 싶을 때
const gSymbol2 = Symbol.for('id');
console.log(symbol1 === symbol2); // true 
// console.log('value: ${symbol1}, type: ${type symbol1}');
//=>심볼은 이렇게 바로 출력하게 되면 오류가 발생함. 항상 .description으로 string으로 변환해서 출력해야 한다.
console.log('value: ${symbol1.description}, type: ${type symbol1}');

// objet, real-life object, data structure
const ellie = { name: 'ellie', age: 20 }; //오브젝트는 우리가 일상생활에서 보는 물건과 물체를 대표할 수 있는 박스형태
// 그냥 변수 age는 아무것도 설명x지만 이렇게 ellie라는 변수를 만들어서 ellie의 이름은 ellie이고, 나이는 20이다
//지금 ellie는 const로 지정되어 있어서 한번 할당된 오브젝트는 다시는 다른 오브젝트로 변경x
// ellie라는 오브젝트는 const키워드로 정의가 되어 있기 때문에, ellie가 가리키고 있는 메모리 포인터는 잠겨 있어서, 다른 오브젝트로 할당이 불가능하지만, ellie오브젝트 안에서는 이렇게 name과 age라는 변수들이 존재. ==> 그래서 ellie.name, ellie.age 이런식으로 하면, 각각 포인터가 가리키고 있는 메모리의 다른 값으로 할당 가능!
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
// C, 자바: 타입을 같이 선언 <-> 자바스크립트:선언할 때 어떤 타입인지 선언하지 않고, 런타임 프로그램이 동작할 때 할당된 값에 따라서 타입이 변경될 수가 있는 것을 이야기함. 
let text = 'hello';
console.log(text.charAt(0)); // h 배열 항상 인덱싱 0부터 시작함.
console.log('value: ${text}, type: ${typeof text}');
text = 1;
console.log('value: ${text}, type: ${typeof text}');
text = '7' + 5;
console.log('value: ${text}, type: ${typeof text}'); //string+string
text = '8' / '2'
console.log('value: ${text}, type: ${typeof text}'); //바로 number로 타입 변환이 되면서 연산이 된 것을 
//console.log(text.charAt(0)); =>배열x 숫자number타입