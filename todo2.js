// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in array functions such as splice().copy


function reverseArr(arr){
  for(var i = 0; i < arr.length / 2; i++){ // arr.length / 2 stops the loop halfway
    //swap the values
    var temp = arr[i]; // temporary hold value
    arr[i] = arr[arr.length - 1 - i] // arr.length points to the last item and -i still points to the last item
    arr[arr.length - 1 - i] = temp;
  }
}
var arr1 = [1,2,3,4];
reverseArr(arr1);
console.log(arr1);

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
// change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

function rotateArr(arr, shiftBy){
  // to rotate to the right once, create temp var that holds the last value, then move all items in the array to the right one index, and then put the temp value at the beginning of the array
// handles to the right
if(shiftBy > 0){
  // loops through rotations
  for(var i = 0; i < shiftBy; i++){
    var temp = arr[arr.length - 1];
    // loop moves items to the right one idx
    for(var r = arr.length - 2; r >= 0; r--){
      arr[r+1] = arr[r];
    }
    // put temp val at the beginning
    arr[0] = temp;
  }
} else {
    var numRotate = Math.abs(shiftBy);
    for(var i = 0; i < numRotate; i++){
      var temp = arr[0];
      for(var r = 0; r < arr.length; r++){
          arr[r-1] = arr[r];
        }
        arr[arr.length - 1] = temp;
      }
    }
}

var arr1 = [1,2,3,4,5];
rotateArr(arr1,4);
console.log(arr1);

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

// [8,2,6,3,4], min = 3, max = 5;
// [2,3,4]
function filterRange(arr, minVal, maxVal){

  /*
  loop through the Array
  IF value not between min and max:
  move all values after current idx to the left one
  and short the length of array
  ELSE move on the next idx
  */
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < minVal || arr[i] > maxVal){
      // move everthing coming afterwars to the left one idx
      for(var l = i+1; l < arr.length; l++){
        arr[l-1] = arr[l];
      }
      arr.length--; // Decreases length of arr by one like pop()
      i--; // cancel i++ operation effectively
    }
  }
}
var arr1 = [8,2,6,3,1,4];
filterRange(arr1,3,5);
console.log(arr1);

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function concatArr(arr1, arr2){
  var newArr = [];
  var currentIdx = 0;
  // loop through first array and push items into the new array
  for(var i = 0; i < arr1.length; i++){
    newArr[currentIdx] = arr1[i];
    currentIdx++;
  }
    // Loop through the first array and push those items into the new array
    for (var i = 0; i < arr2.length; i++) {
      // newArr.push(arr1[i]);
      newArr[currentIdx] = arr2[i];
      currentIdx++;
    }
  return newArr;
}
var resultArr = concatArr([4, "coding", 2], [6, "dojo"]);
console.log(resultArr);
