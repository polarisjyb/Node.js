/*
  비슷한 성질을 가진 여러개의 객체를 만들기 위해, 일종의 설계도 라고 할 수 있는
  생성자 함수(Constructor)를 만들어 찍어내듯 사용하는데 이렇게 생성된 객체를 인스턴스라 부를수 있다.
*/

//  생성자 함수(Constructor) = 거푸집
//  인스턴스 = 거푸집으로 찍어낸 칼


function Sword(color, metal) {
  this.color = color;
  this.metal = metal;
  this.is = function() {
    console.log(`This is ${this.color} ${this.metal} Sword!`);
  };
}

const blueSteel = new Sword('blue', 'steel');

console.log(blueSteel); // Sword {color: 'blue', metal: 'steel', is: f}

blueSteel.is(); // This is blue steel Sword!

/*
  클래스(Class)나 프로토타입을 사용하여 만들어 낸  결과물이 인스턴스라고 할 수 있다.
  이렇게 생성된 인스턴스는 원래의 객체인 클래스나 프로토타입이 가지고 있는 프로퍼티(property)와 메소드(method)를
  모두 상속(inheritance) 받는다.
*/