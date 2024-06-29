var name = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]




function whoPaying(name) {
  var random = Math.random() ;
var num = Math.floor(random*5);
var person = name[num];
 return name[num] +" is going to buy lunch today!";
}

console.log(whoPaying(name));
