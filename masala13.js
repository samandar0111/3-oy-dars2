let a = -20
let b = 15
let c = -17

if((b < a && a <c) || (c < a && a < b)){
  console.log(a);
}else if((a < b && b < c) || (c < b && b < a)){
  console.log(b);
}else{
  console.log(c);
}