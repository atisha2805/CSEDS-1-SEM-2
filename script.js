//data types in javascript
//premitive data types
/*let name= "Alice";    //String
//console.log(typeof name) ; 
let age= 30;
//console.log(typeof age) ; 
let isStudent = true;
//console.log(typeof isStudent) ; 
let score=65;
//console.log(typeof(score)) ; 
let car = null;
//console.log(typeof(car)); 
let student = { 
    name:"Bob" ,
    age:25,
    isStudent: true,
    email:"xyz@gmail.com" 
}
console.log(student); */
 
/*let a=10;
let b=5;
console.log(a+b);  //15
console.log(a-b);  //5
console.log(a/b);  //2
console.log(a*b);  //50
console.log(a%b);  //0
console.log(++a);  //11
console.log(a++);  //11
console.log(--a);  //11
console.log(a--);  //11
console.log(a);    //10  */

/*let a=10;
console.log(a+=3);  //13
console.log(a-=3);  //10
console.log(a*=3);  //30
console.log(a/=3);  //10
console.log(a);  //10  */

//Comparison operator
/*let a=45;
let b="45";
console.log(a==b); //true */

//string operator
/*let a="atisha";
let b="baranwal";
console.log(a+b);
let age=10;
let status=(age>18)?"Adult":"Minor";
console.log(status);*/

//If else condition use
/*let temperature = 15;
if(temperature > 30)  {
    console.log("It's hot!");
} else if(temperature > 20) {
    console.log("It's warm.");
} else {
    console.log("Its's cold.");
} */

//Switch case
/*let day=3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Just another day");
        break;
} */

/*let a=5;
let b=2;
a--;
console.log(a);*/

/*let num=prompt("Enter a number");
if(num%5===0) {
    console.log(num,"is a multiple of 5");
} else {
    console.log(num,"is not a multiple of 5"); 
} */
let marks=prompt("Enter the marks(0-100)");
if(marks>=80 && marks<=100) {
    console.log("A");
} else if(marks>=70 && marks<=89) {
    console.log("B");
} else if(marks>=60 && marks<=69) {
    console.log("C");
} else if(marks>=50 && marks<=59) {
    console.log("D");
} else if(marks>=0 && marks<=49) {
    console.log("E");
}

