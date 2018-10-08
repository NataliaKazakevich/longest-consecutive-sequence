module.exports = function longestConsecutiveLength(array) {
array.sort(function(a, b){
  return a - b;
});
var first = array[0];
var length = 1;
if (array.length === 0) {
  return 0;
}
var max = 1;
var numElem = 0;
for (var i = 1; i < array.length; i++) {
  if (first == (array[i] - 1) ) {
    length++;
  }else{
    if (max < length) {
      max = length;
    }
    length = 1;
  }
  first = array[i];
}
return max;
}
