//console.table({name: "samina", age:36});
console.log("samina");
console.log("samina");
console.log("samina");
console.log("samina");
console.log("samina");
console.clear();

console.log("samina");
console.log("samina");

//comments
//console.log("age");

//clg -->console.log
//log -->console.log

//variables
//(reserved keyword)(variable name)(type of value)--format how write code
//var,const , let--> key words

/*declared variable*/
//let name;
//console.log(name);/*undefined bcs there is no value of variable  */

let number = 4;
console.log(number); /*defined bcs variable has value */

let name = "samina salam";
console.log(name);
let age = 36;
console.log(age);

//<--- assigning variable
let fruit;
fruit = "apple";
console.log(fruit);

/* conventtions of writing variable 
every time creating variable not using reset keyword as the name
to your variable bcs it give errors*/
//using camel case format
/*.you cannot write first letter as a number it causes to error
  .don't use dash(-) between the names
  .don't use dash(-)infront of the name its not valid.
  .using underscore(_) its valid
  .don't use _ infront of the name (may be work)
  .first usin  $ sign is working
  .
*/

let youtubChannel = "mrbeast";
youtubChannel = "webdev";
youtubChannel = "dev";
console.log(youtubChannel);
/*Use const when you don’t want a variable to change.
  Use let for variables that may change. */

let name1 = "samina salam kalathil";
let whatDoYouWannaBecomeInYourLife = "programmer";
let gender = "female";
let twitterHandle = "@samian.twitter";

console.log(name1);
console.log(whatDoYouWannaBecomeInYourLife);
console.log(gender);
console.log(twitterHandle);

//primitive Types
/*number */

let num1 = 10676767653333;//we assign value of negative is just fine, 
console.log(num1);

/*type of number */

let num2 = 23.8;//
console.log(typeof num2);//it shown what is this ,this number.

/*Basic Math */
//console.log(2+2);
//console.log(8-2);
//console.log(100%12);
//console.log(2*12);
//console.log(22/6);
//console.log(2-22);
//console.log(50%100);
//console.log(2**4);//power (2^4)

//increment 
//let counter = 0;
//counter ++;

//console.log(counter);

//decrement
//let counter1=9;
//counter1 --;

//console.log(counter1)

//check first favnum mod secondfavnumber

//let firstFavNum = 21;
//let secondFavNum = 7;

//console.log(firstFavNum + secondFavNum);
//console.log(firstFavNum - secondFavNum);
//console.log(firstFavNum * secondFavNum);
//console.log(firstFavNum / secondFavNum);
//console.log(firstFavNum % secondFavNum);
//console.log(firstFavNum ** secondFavNum);

//Boolean-true || false(true or false)

let isTrue = true;
console.log(isTrue);


let isTrue1 = false;
console.log(isTrue1);

let isTrue2 = NaN;
let number1 = 10;
console.log(isTrue2);

//undefined NaN
let number4 = 10;
console.log(number4 + undefined);

//FALSY
/*
 .falseThe Boolean value false
 .null → Represents the absence of any value
 .undefined →  A variable that has been declared but not assigned a value
 .0 → The number zero
 .-0 → Negative zero (rare but still falsy)
 .NaN → "Not-a-Number," usually the result of an invalid mathematical operation
 .'', "", ´´, (empty quotes) → Strings with no characters

 "In JavaScript, a falsy value is a value that evaluates 
 to false when used in a Boolean context, 
 such as an if statement".

    if (!0) {
       console.log("0 is falsy"); // This will be logged
      }

   if (!"") {
     console.log("An empty string is falsy"); // This will be logged
    }

*/

let notDefined=undefined;
console.log(notDefined);

let notDefined1=null;
console.log(notDefined1);


//1.create variable name(isJsProgrammingLanguage)& store true as a value.
//2.create variable name(isJsHard)& store false as a value.
//3.create variable name(favNumb)& store your favorite number inside.
//4.now add favNumber with the value of undefined.

//answers

let isJsProgrammingLanguage=true;
let isJsHard=false;
let favNumb=36;

console.log(isJsProgrammingLanguage);
console.log(isJsHard);
console.log(favNumb + undefined);
 
