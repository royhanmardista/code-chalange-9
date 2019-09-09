function groupAnimals(animals) {
  // you can only write your code here!   
  animals.sort(function (a, b) {
    if (b[0] > a[0]) {
        return -1;
    }
    if (a[0] > b[0]) {
        return 1;
    }
    return 0;
    });
  var output = []  
  output.push([animals[0]])
  var awal = animals[0][0];
  var j = 0;
  var i = 1;
  while (i<animals.length) {
    for (var i = 1; i<animals.length; i++) {              
        if (animals[i][0] === awal) {
            output[j].push(animals[i])
        } else {
            output.push([animals[i]])    
            awal = animals[i][0]
            j++
        }        
    }    
  }
  return output;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
