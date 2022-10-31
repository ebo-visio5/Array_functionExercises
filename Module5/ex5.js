
var arr = [{
         name: "Joshua",
         isInstructor: true
       }, {
         name: "Mark",
         isInstructor: true
       }, {
         name: "Arthur",
        isInstructor: true
      }]
      
       function addKeys(array, key) {
         return array.reduce((acc, obj) => {
           return acc.concat(obj[key])
         }, [])
       }
      
      console.log(addKeys(arr, 'name'))
