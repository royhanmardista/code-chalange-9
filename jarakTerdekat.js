function targetTerdekat(arr) {
  // you can only write your code here!
  var indexX=[];
  if (arr.indexOf('x') != -1) {
    if (arr.indexOf('o') >  arr.indexOf('x')) {
        for (var i = 0; i<arr.length; i++) {
          if (arr[i]==='x') {
            indexX.push(Math.abs(arr.indexOf('o')-i))
          }
        }
        return indexX.sort((a,b)=>{return a-b})[0];
    } else {
        return Math.abs(arr.indexOf('x') - arr.indexOf('o'))
    } 
  } else {
    return 0;
  }
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'x', ' ', 'x', 'x', ' ', 'o', 'x'])); // 1
console.log(targetTerdekat([' ', 'x', ' ', 'x', 'x', ' ', ' ', 'o'])); // 3