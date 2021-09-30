// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

var myNumber = 42;
var myName = "Branley";
[myNumber, myName] = [myName, myNumber];
// console.log(myNumber);
// console.log(myName);
console.log(`myNumber is ${myNumber} and myName is ${myName}`);

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

for(var num = -52; num <= 1066; num++){
  console.log(num);
}

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful(){
  for(var i=0; i <= 98; i++){
    console.log("good morning");
  }
}
beCheerful();

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.
// ???????
for(var i = -300; i <= 0; i+=3){
  if(i == -6 || i == -3){
    continue;
  }
  else {
    console.log(i);
  }
}


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

var num = 2000;
while(num <= 5280){
  console.log(num);
  num++;
}

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

var birthMonth = 6;
var birthDay = 18;
// var birthMonth = 7;
if(birthMonth === 6 && birthDay === 18){
  console.log("How did you know?");
}
else{
  console.log("Just another day");
}

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function LeapYear(year){
  if(year % 4 === 0 && year % 100 === 0 || year % 400 === 0){
    console.log("is a leap year");
  }
  else{
    console.log("This is not a leap year");
  }

}
LeapYear(1998);
LeapYear(2000);
LeapYear(2022);

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

for(var i = 512; i <= 4096; i++){
  if(i % 5 == 0){
  console.log(i);
}
}

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

var num = 0;
while(num <= 60000){
  num++;
  if(num % 6 == 0){
    console.log(num);
  }
}

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for(var i = 1; i <=100; i++){
  if(i % 5 == 0 && i % 10 !== 0){ 
    console.log("Coding");
  }
  if(i % 10 == 0){
    console.log("Dojo");
  }
  console.log(i);
}


// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.
//???????????????????????????
function input(incoming){
  var sum = 0;
  for(var i = 0; i <= 10; i++){
    sum+=1;
  }
  return sum;
}
console.log(input(100));

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

var sum = 0;
for(var i = -300000; i <= 300000; i++){
  if(i % 3 == 0){
    console.log(i);
  }
}

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

var i = 2016;
while(i > 0){
  i-=1;
  if(i % 4 == 0){
    console.log(i);
  }
}

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

var lowNum, highNum, mult = 0;


  