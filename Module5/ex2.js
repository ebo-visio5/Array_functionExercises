 function filterLetters(arr,letter){
        let count = 0
        arr.filter(x => {
           if(x.toLowerCase() == letter.toLowerCase()){
          count++
          console.log(arr,letter);
        }
      })
      return count
      }
    filterLetters(["a","a","b","c","A"], "B");
    