let a = 36
let b = 45
let c = 25

if((a < b && a < c) &&  c < b){
  console.log(a);
  console.log(b);
}else if((a < b && a < c) &&  b < c){
  console.log(a);
  console.log(c);
}else if((b < a && b < c) && a < c ){
  console.log(b);
  console.log(c);
}else if((b < a && b < c) && c < a){
  console.log(b);
  console.log(a);
}else if((c < a && c < b) && a < b){
  console.log(c);
  console.log(b);
}else if((c < a && c < b) && b < a){
  console.log(c);
  console.log(a);
}