module.exports = function longestConsecutiveLength(array) {

array.sort(function(a, b){
  return a - b;
});

let first = array[0];

let length = 1;
if (array.length === 0) {
  return 0;
}

let max = 1;

let numElem = 0;
for (let i = 1; i < array.length; i++) {
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
