
function descendingSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
      var maxIndex = i;
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[j] > arr[maxIndex]) {
          maxIndex = j;
        }
      }
      if (maxIndex !== i) {
        var temp = arr[i];
        arr[i] = arr[maxIndex];
        arr[maxIndex] = temp;
      }
    }
    return arr;
  }
  
  var myArray = [5, 2, 9, 1,3, 6];
  var sortedArray = descendingSort(myArray);
  console.log(sortedArray);
  
