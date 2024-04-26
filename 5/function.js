'use strict';

//Function
// - function은 프로그램을 구성하는 굉장히 기본적인 빌딩 블럭
// - subprogram이라고도 불리며, 여러번 재사용 가능하다는 장점을 가짐.
// - 1가지의 task나 값을 계산하기 위해서 쓰임.

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing =>하나의 함수는 한가지의 일만 하도록 만들어야 한다.
// JS에서 function은 object이다!! 그렇기 때문에, 함수를 변수에 할당할 수도 있고, 파라미터로 전달이 되고, 함수를 return 할 수도 있게 되는 것임.

function printHello() { //parameter는 하나도 받지 않음.
    console.log('Hello');
}
printHello(); //함수 호출

function log(message) { //parameter로 message를 전달
    console.log(message);
}
log('Hello@'); 
log(1234);
//JS는 타입이 없기 때문에, 함수 자체의 인터페이스만 봤을 때 메세지가 string을 전달해야 하는지, 숫자를 전달해야하는지 명확하지 않음!!



// 2. Parameters

// primitive parameters: passed by value (메모리에 value가 그대로 저장되어 있기 때문에,  value가 전달이 된다.)
// object parameters: passed by reference (메모리에 reference가 저장됨.)
function changeName(obj) {
    obj.name = 'coder'; //전달된 obj의 name을 무조건 coder로 변경하는 함수
}
const ellie = { name: 'ellie' }; // ellie라는 const를 정의한다음, ellie라는 obj를 만들어서 할당해주면, 메모리는 obj로 만들어진 레퍼런스가 메모리에 들어가게 되고, 이 레퍼런스는 바로 이 오브젝트를 메모리 어딘가에 가리키고 있음.
changeName(ellie); //ellie가 가리키고 있는 것의 이름을 coder로 변경
console.log(ellie); //출력하게 되면 ellie의 이름 coder로

//=> 오브젝트는 레퍼런스로 전달되기 때문에, 오브젝트의 값을 변경하게 되면, 그 변경된 사항이 그대로 메모리에 적용이 되기 때문에 추후에 변경된 사항들이 확인 가능



// 3. Default parameter
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');



// 4. Rest parameters (...)
function printAll(...args) { //배열의 형태로 전달 , args 3개의 값이 담겨져있는 배열
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) { //arg에 있는 값이 차례차례 하나씩 지정이 되면서 실행
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg)); //배열에서 forEach함수 이용
}
printAll('dream', 'coding', 'ellie');



// 5. Local scope
let globalMessage = 'global'; // global variable

function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); // error
}
printMessage();



// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);



// 7. Early return, early exit

// bad
//   function upgradeUser(user) {
//     if (user.point > 10) { 

//     }
//   }

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
}



// 8. Function expression
// 함수 선언과 함수 표현의 큰 차이점
// expression은 이렇게 할당된 다음부터, 호출이 가능한 반면에, 즉 print를 선언하기 전에 호출을 하면, 에러가 나지만 
// declaration은 호이스팅이 된다. 함수가 선언되기 이전에 호출해도 된다. js엔진이 선언을 제일 위로 올려줌. ex) sum
const print = function () { //함수를 선언함과 동시에 바로 변수에 할당할 수 있음.
  // anonymous function: function() 함수에 이름이 없이 필요한 것만 작성해서 변수에 할당한 것, 아니면 named function: fuction print() 이렇게 함수 이름을 줄 수 있음.
    console.log('print');
};
print(); //print라는 변수에 함수를 호출하듯이 하면, print가 출력이 됨.

const printAgain = print; // 또 다른 변수에 할당하게 되면, printAgain은 function()함수를 가리키고 있기 때문에, 
printAgain(); // 다시 함수를 호출하는 것처럼 부르면, ,print가 출력되는 것을 볼 수 있다.

const sumAgain = sum; //sum이라는 function을 위에서 만들었었는데, 다시 sumAgain라는 변수에 할당하게 되면
console.log(sumAgain(1, 3)); // 4 동일하게 호출할 수가 있음.



// 9. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// Arrow function
// 함수를 간결하게 해준다.
// 얘는 항상 이름이 없는 always anonymous fucntion이다.
const simplePrint = () => console.log('simplePrint!'); //fucntion이라는 키워드, 블록 필요x
const add = (a, b) => a + b; //return 값은 a + b
// const add = function (a, b) { 이렇게 표현한 것과 위처럼 표현한 것은 같다.
//   return a + b; 
//};
const simpleMultiply = (a, b) => {
    return a * b; // 함수 안에서 다양한 일을 해야돼서 블록이 필요하다면, return 값이 필요!
};

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 함수 호출하기
(function hello() {
    console.log('IIFE');
})();


// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}

console.log(calculate('add', 2, 3));