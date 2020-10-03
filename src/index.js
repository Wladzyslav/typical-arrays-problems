
exports.min = function min (array) {
  if (typeof array === "undefined" || array.length == 0 ) return 0;
  
  var smallest = array[0];
  
  for(var i=1; i<array.length; i++){
    if(array[i] < smallest){
        smallest = array[i];   
    }
}
  return smallest;
}

exports.max = function max (array) {
  if (typeof array === "undefined" || array.length == 0 ) return 0;
  var bigest = array[0];
  
  for(var i=1; i<array.length; i++){
    if(array[i] > bigest){
        bigest = array[i];   
    }
}
  return bigest;
}

exports.avg = function avg (array) {
  if (typeof array === "undefined" || array.length == 0 ) return 0;
  return array.reduce((a, b) => a + b) / array.length;

}