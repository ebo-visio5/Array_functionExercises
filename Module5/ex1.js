// ex 1 
var arr = [{
    name: "Elie",
    isInstructor: true
  }, {
    name: "Tim",
    isInstructor: true
  }, {
    name: "Matt",
    isInstructor: true
  }]
  
  function extractKeys(array, key) {
    return array.reduce((acc, obj) => {
      return acc.concat(obj[key])
    }, [])
  }
  
  console.log(extractKeys(arr, 'name'))
