let x1 = 5
let x2 = 10
let x3 
let x4 = 10

let y1 = 4
let y2 = 4
let y3 
let y4 = 1

if(x1 != undefined && x2 != undefined && x3 != undefined){
  x4 = x2
  console.log(x4)
}else if(x1 != undefined && x2 != undefined && x4 != undefined){
  x3 = x1
  console.log(x3);
}else if(x1 != undefined && x3 != undefined && x4 != undefined){
  x2 = x4
  console.log(x2);
}else if(x2 != undefined && x3 != undefined && x4 != undefined){
  x1 = x3
  console.log(x1);
}
if(y1 != undefined && y2 != undefined && y3 != undefined){
  y4 = y3
  console.log(y4);
}else if(y1 != undefined && y2 != undefined && y4 != undefined){
  y3 = y4
  console.log(y3);
}else if(y1 != undefined && y3 != undefined && y4 != undefined){
  y2 = y1 
  console.log(y2);
}else if(y2 != undefined && y3 != undefined && y4 != undefined){
  y1 = y2
  console.log(y1);
}