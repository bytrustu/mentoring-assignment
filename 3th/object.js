// 1. 객체 리터럴
const person = {
    name: 'joon',
    age: 22,
};
console.log(person);

// 2. 생성자 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.say = function() {
        console.log(`Hello ${this.name}, ${this.age}`);
    }
}
const person2 = new Person('joon', 22);
person2.say(); // Hello joon, 22

// 3. Object.create
const person3 = Object.create(person2);
person3.name = 'bytrustu';
person3.name = 33;
person3.say(); // Hello bytrustu, 33
