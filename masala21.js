let x = 5
let y = 2

if(x == 0 && y == 0){
console.log(0);
}else if((x < 0 || x > 0) && y == 0){
  console.log(1);
}else if((y < 0 || y > 0) && x ==0){
  console.log(2);
}else{
  console.log(3);
}
