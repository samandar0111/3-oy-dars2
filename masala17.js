let a = 25
let b = 19
let c = 15


if ((a < b && b < c) || (c < b && b < a)){
  a = a / 2
  b = b / 2
  c = c / 2
}else{
  a = -a
  b = -b
  c = -c
}
console.log(a,b,c);