const sumInt = function(a, b) => {
  return Math.round(a+b);
}
const subtractionInt = function(a, b) => {
  return Math.round(a-b);
}

const divisionInt = function(a, b) => {
  return Math.round(a/b);
}

const multiplicationInt = function(a, b) => {
  return Math.round(a*b);
}

const power = function(a, pow) => {
// let b = 1
//   for(let i=1; i<=pow; i++){
//     b *= a
//   }
// return b;
// if (p<0){
//   return 1;
// }
// return a*power(a, p-1);
return a ** p;
}
console.log(power(6, 3));


const root = (a, pow) => {
// let b = a
//   for(let i=1; i<=pow; i++){
//     b /= a
//   }
// return b;
return a ==(pow ** - 1);
}
console.log(root(125, 3));

const absolute = (a) => {
 if(a < 0) {
   a = a * (-1)
 }
 return a;
}
console.log(absolute(5))

const mod = (a, b) => {
  // let c = Math.floor(a/b)
  // let d = c*b
  // let e = a-d
  //   return e;
  return a % b;
}
console.log(mod(10, 4));

const log = (a, base) => {
if(base < a){
  return 1;
}
return 1 + log(base, a/base);
}
const factorial = (a) => {
  if (a <= 0){
    return 1;
  }
  return a * factorial(a - 1)
}

const flipSign = (a) => {
return a * (-1);
}

const sin = (x) => {

x %= 360;
let rad = x * Math.PI / 180;
let res = 0;
for(i = 0; i < 10; ++i)
{
  res += power(-1, i) * power (rad, 2 * i ) / factorial(2 * i + 1);
}
return res;
}

const cos = (x) => {
//   let pi = 3.1415;
//   x %= 360;
//   let rad = x * Math.PI / 180;
//   let res = 0;
//   for(i = 0; i < 30; ++i)
//   {
//     res += power(-1, i) * power (rad, 2 * i + 1) / factorial(2 * i + 1);
//   }
//   return res;
// }
const percent = (a, b) => {
return (a*b/100);
}

const integral = (func, a, b, precision) => {
let sum = 0;
for(let i = a; i< b: i = i + precision){
  sum =+ func(i) * precision;
  }
  return sum;
}
const f = (x) => x;


integral(f, 0, 5, 0.00001);
