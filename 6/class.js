'use strict';

//class
//클래스 : 연관있는 데이터를 한 데 묶어놓는 컨테이너 같은 것
//클래스 = 속성(변수, field) + 행동(함수, method)
// template(틀), declare once, no data in(데이터x)

//object
// 오브젝트 : 클래스(틀)을 이용해서 실제로 데이터를 넣어서 (새로운 인스턴스)를 만드는 것
// instance of a class, created many times, data in
// 클래스는 정의만 한 것이라 실제로 메모리에 올라가진 않지만, 데이터를 넣으면 오브젝트는 메모리에도 올라간다.
// 붕어빵틀 (클래스) -> 팥, 크림 (데이터) -> 팥붕어빵, 크림붕어빵 (오브젝트)

// Object-oriendted programming
// class: template(틀) 
// object: instance of a class



// 1. Class declarations
class Person { // 클래스 정의
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`); //this => 생성된 오브젝트
  }
}

const ellie = new Person('ellie', 20); //새로운 오브젝트 new
console.log(ellie.name);
console.log(ellie.age);
ellie.speak(); //함수호출



// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName; // 클래스 안에 3개의 변수 firstName, lastName, _age
    this.lastName = lastName;
    this.age = age;
  }

//헷갈 주의!
// 그냥 return this.age하면 call stack 에러뜸. 
// => 우리가 age라는 getter를 정의하는 순간, class안 this.age는 메모리에 올라가 있는 데이터를 읽어 오는 것이 아니라, 이 getter를 바로 호출하게 된다!!
// => setter를 정의하는 순간, =를 호출하게 될 때 즉, 값을 할당할 때 바로 메모리의 값을 할당하는 것이 아니라, 이 setter를 호출하게 됩니다.
//setter안에서 this.age = value; 라고 하면 => 즉 setter안에서 전달된 value를 this.age에 할당할때, 메모리의 값을 업데이트하는 것이 아니라 이 setter를 호출하게 된다. 즉 setter로 돌아와서 이 문장은 또다시 setter를 호출하고 계속 무한정 반복 -> 이걸 방지하기 위해서 getter, setter안에서 쓰이는 변수명을 조금 다른 것으로 바꿔준다.

  get age() { //나이가 -1은 말이 안되므로 이 값을 get키워드로 받고
    return this._age;
  }

  set age(value) { //set이라는 키워드를 통해서 값을 설정(하기 때문에 value를 받아와야함)
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value; 
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age); //내부적으로 getter와 setter를 이용하기 때문에 .age 쓸 수 있다.



// 3. Fields (public, private)
class Experiment {
  publicField = 2; //const 생성자를 쓰지 않고 filed를 그냥 정의하면 public 외부에서 접근가능
  #privateField = 0; // #를 붙이면 private 클래스 내부에서만 값이 보여지고 접근이 가능하고, 변경이 가능하지만, 클래스 외부에서는 읽을 수도 변경할 수도 없음.
}
const experiment = new Experiment(); //const 생성자
console.log(experiment.publicField);
console.log(experiment.privateField);



// 4. Static properties and methods => 잘 안쓰임.
// 클래스 안에 있는 필드와 메소드들은 새로운 오브젝트를 만들때마다 그대로 복제 되어서 값만 우리가 지정된 값으로 변경되어서 만들어짐. 간혹 이런 오브젝트, 데이터와 상관없이 클래스가 가지고 있는 고유한 값과 이런 데이터와 상관없이 동일하게 사용되는 메소드가 있을 수 있음. 그런것들을 static

class Article {
  static publisher = 'Dream Coding'; // =>static을 붙이면 데이터, 오브젝트와 상관없이 클래스 자체에 연결되어있음. 공통적으로 쓸 수 있는 거라면 메모리의 사용에 b
  // = 이게 무슨말이냐면, article1과 article2 오브젝트를 만들게 되면, 만약 우리가 여기서 static 사용x면, console.log(article1.publisher) 이렇게 오브젝트를 이용해서 오브젝트에 퍼블리셔를 출력할 수 있었을 거임. but, static으로 하고 이렇게 하면 undefined이 나옴. 
  // => undefined이 나오는 이유는 static은 오브젝트마다 할당되어지는 것이 아니라!!! article클래스 자체에 붙어 있기 때문! 그래서 consle.log(Article.publisher)로 해줘야함!
  // 그래서 스태틱함수를 호출 할 때도 클래스 이름을 이용해서 Article.printPublisher();

  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

//클래스 안에 있는 필드와 메소드들은 새로운 오브젝트를 만들 때마다 그대로 복제되어서 값만 우리가 지정된 값으로 변경되어서 만들어짐. 
// 간혹 이런 오브젝트와 상관없이 데이터에 상관없이 클래스가 가지고 있는 고유한 값과 이런 데이터에 상관없이 동일하게 반복되어지는 메소드가 있을 수 있음. 이런 것들을 static이라는 키워드 사용!!



// 5. Inheritance
// ex) shape을 정의한 다음, shape의 공통적 특성을 재사용하면 간편
class Shape { //Shape 클래스 : 필드3개, 메소드2개
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {} // 반복x extends로 Shape을 연장하여 Shape의 필드, 메소드 자동적으로 Rectangle에 포함

class Triangle extends Shape {
  draw() { //오버라이딩, 근데, Triangle에서 draw라는 메소드를 오버라이딩 했기 때문에 Shape의 draw 더이상 호출XXX => 우리가 공통적으로 정의해준 Shape의 draw도 호출하면서, 색다르게 더 그려주고 싶다! 하면 super이용!!!
    super.draw(); //부모의 draw라는 함수를 호출하게 되면, 부모의 draw도 호출되고 그 뒤에 Triangle의 draw 메소드도 호출된다! drawing red color! , 🔺 
    console.log('🔺');
  }
  getArea() { // 오버라이딩(재정의) : 필요한 함수만 재정의
    return (this.width * this.height) / 2;
  }

  toString() { //오브젝트의 메소드 오버라이딩(재정의)
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());



// 6. Class checking: instanceOf
// 오브젝트 : 클래스를 이옹해서 만들어진 새로운 인스턴스
console.log(rectangle instanceof Rectangle); //instanceof : 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 인스턴스 인지 아닌지 즉, 이 오브젝트rectangle가 이 클래스Rectangle를 이용해서 만들어진 아이인지 확인하는 것 => true, fasle 호출 => true
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t => 우리가 자바스크립트에서 만든 모든 오브젝트 클래스들은 이 자바스크립트에 있는 오브젝트를 상속한 것!!! => 우리가 어떤 오브젝트든지 공통적으로 존재하는 메소드들을 쓸 수 있다.
// 오브젝트 위에다가 커맨드 or Ctrl키를 누르고 이렇게 클릭하면, 정의된 부분으로 갈 수 있다!
console.log(triangle.toString()); //Objcet의 toSting메소드를 쓸 수 있는데, oject Object라고 출력되는데 정말 쓸 때 없고 의미 없으므로, triangle에서 오버라이딩(재정의)해줘서 쓴다.

//JvaScript refernce mdn웹사이트

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);