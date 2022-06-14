function generateInitialName(name){
  let myInitial = name.charAt(0);
  let arrName = name.split(" ");
  if(arrName.length >= 2){
    myInitial = arrName[arrName.length-2].charAt(0) + arrName[arrName.length-1].charAt(0);
  }else{
    var lengthFirst = name.length;
    if(lengthFirst > 2){
      myInitial = name.charAt(0) + name.charAt(lengthFirst-2);
    }
    else{
      myInitial = name.charAt(0);
    }
  }
  return myInitial.toUpperCase();
}

console.log(generateInitialName("Dewa Ketut Satriawan"))
console.log(generateInitialName("Dewa Ketut"))
console.log(generateInitialName("Dewa"))