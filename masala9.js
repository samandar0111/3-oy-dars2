let a = 0
let b = 0

if(a > 0){
  a = -a
  console.log(a);
}else{
  console.log(a)
}
if(b > 0){
  console.log(b)
}else if(b < 0){
  b = -b 
  console.log(b)
}else{
  b = ++b
  console.log(b)
}
