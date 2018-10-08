module.exports = function longestConsecutiveLength(array) {
  let count = 1, max = 1;
  if (array.length == 0)
    return 0;
  array.sort((a, b) => a - b);
  for (let i = 0; i < array.length; i++)
  {
    if (array[i] == array[i+1]-1)
      max++;
    else 
      if (array[i] != array[i + 1]) 
       if (max > 1)
        {
          if (count < max)
                count = max;
           max = 1;
        }
  }
  return count;
}
