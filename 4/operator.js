// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log('string literals: 1 + 2 = ${1 + 2}');

// 2. Numeric operators 연산자
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1); 
console.log(1 * 1);
console.log(5 % 2); // 나머지값
console.log(2 ** 3);  //지수

// 3. Increment and decrement operators (증감 연산자)
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;

console.log('preIncrement: ${preIncrement}, counter: ${counter}');
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log('postIncrement: ${postIncrement}, counter: ${counter}'); // 3 4

const preDecrement = --counter;
console.log('preDecrement: ${preDecrement}, counter: ${counter}');
const postDecrement = counter--;
console.log('postDecrement: ${postDecrement}, counter: ${counter}');

// 4. 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;



// 5. 비교 연산자
console.log(10 < 6); 
console.log(10 <= 6); 
console.log(10 > 6);
console.log(10 >= 6); 



// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2; // false

// || (or) =>하나라도 true가 나오면 true가 나오는 연산자 
// +++중요한 것 or연산자는 처음으로 ture가 나오면 멈춘다!! 그래서 더이상 wasting time 이라는 것이 출력이 안된다
console.log('or: ${value1 || value2 || check()}');

// && (and) =>3개의 값이 다 true여야 true 리턴
// +++ value1이 false면 뒤에 거 실행XXX, 그러니 or, and 둘다 헤비한 것은 뒤에서 체크하는 것이 좋음.
console.log('and: ${value1 && value2 && check()}');

// oftenr used to compress long if-statement
// nullableObject && nullableObject.something => null오브젝트가 널이 아닐 때만 somthing받아옴.

function check() { //그냥 true를 리턴되는 함수
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log('😱');
  }
  return true;
}

// ! (not)
console.log(!value1); // true => false



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality (type을 변경해서 검사함.)
console.log(stringFive == numberFive); //true
console.log(stringFive != numberFive);

// === strict equality (type도 신경써서 검사함. type도 같아야함) 
// 코딩할 때 웬만하면 이걸로 검사하기
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference (object는 메모리에 탑재될 때, 레퍼런스 형태로 저장됨)
// 조금 더 신경써서 공부할 것
const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1;
console.log(ellie1 == ellie2); // false (다른 레퍼런스)
console.log(ellie1 === ellie2); // false (다른 레퍼런스)
console.log(ellie1 === ellie3); // true (같은 레퍼런스)

// equality - puzzler
// (0, null, undefined, empty string('')은 모두 false로 간주)
console.log(0 == false); // true 
console.log(0 === false); // false (type도 고려)
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false



// 8. Conditional operators: if
// if, else if, else
const name = 'df';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}


// 9. Ternary operator: ?
// condition ? value1 : value2;
// condition이 true면, 왼쪽 실행(yes), 아니면 오른쪽 실행(no)
console.log(name === 'ellie' ? 'yes' : 'no');



// 10. Switch statement
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;

  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;

  default:
    console.log('same all!');
    break;
}



// 11. Loops
// while loop: true일 때만 반복 (조건문이 맞을 때만 실행하고 싶다면)
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop: do 부분은 무조건 실행 (블럭을 먼저 실행하고 싶다면)
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);


// for loop, for(begin; condition; step)
// for loop는 begin을 딱 한번만 호출을 하고, 블럭을 실행하기 전에 condition이 맞는지 아닌지 검사한다음에 블럭이 다 실행한다음 step 실행
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) { // let이라는 지역 변수 선언
  console.log(`inline variable for: ${i}`);
}

// 중첩 for문
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}


// break(loop를 완전히 끝냄), continue(지금 것만 스킵)
// Q1. 숫자를 0~10까지 짝수만 출력 (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. 범위 0~10까지를 looping하는 것을 작성하되, 8이 되면 break (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}