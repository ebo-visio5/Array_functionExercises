function printFirstAndLast (arr) {
  
    var newString = '';
    
    arr.forEach ( function (val) {
      var newVal = val[val.length-1];
      newString = val[0] + newVal;
      console.log(newString);
    });
  }
printFirstAndLast(['awesome','example','of','forEach']);
