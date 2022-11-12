let a = 10
let b = 15

if(a == b){
  a = 0
  b = 0
  console.log(a , b);
}else{
  a = a + b
  b = (a - b) + b
  console.log(a , b);
}