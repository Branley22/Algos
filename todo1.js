// Arrays To Do 1


// Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushToFront(arr, val){
  //Need array passed in and value passed in 
  // Need to put val at the beginning of array, move everything else one index 
  // Need temp var to hold values
  var temp1 = arr[0], temp2 = arr[1];

  for(var i = 0; i < arr.length && temp1 != undefined; i++){
    arr[i+1] = temp1;
    temp1 = temp2;
    temp2 = arr[i+2];
  }
  arr[0] = val; //inserts value at the beginning
}
var myArr = [2, 3, 4, 5, 6];
pushToFront(myArr, 1);
console.log(myArr);


// Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().

function popFront(arr){
  // return the beginning value
  var returnVal = arr[0];
  // loop through the array starting at 1
  for(var i = 1; i < arr.length; i++){
    // take i of index 1 and move to index 
    // i = 1; arr[0] = arr[1]
    arr[i-1] = arr[i];
  }
  arr.pop(); 
  return returnVal;
}
var myArr = [4,3,2,1,6];
var myResult = popFront(myArr);
console.log(myArr);
console.log(myResult);


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr,val,idx){
  // moving values to the right  - stopping at index where inserting the new value
  for(var i = arr.length - 1; i >= idx; i--){
    arr[i+1] = arr[i];
  }
  arr[idx] = val; // putting value at specific index
}
var myArr = [2,7,9,3,1];
insertAt(myArr,4,4);
console.log(myArr);