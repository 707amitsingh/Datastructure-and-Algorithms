const sum = function(a){
    return function(b) {
      return b ? sum(a + b) : a; 
    }
}