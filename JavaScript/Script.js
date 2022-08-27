// function msg(){  
//     alert("Hello Javatpoint"); 
// }

// var variable 
var name = "Nitish Mehta";
console.log(name);
var name = "Awasthi Mehta";
console.log(name);
var greeter = "hey hi";

    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
        var greeter = "JavaScript is the world's most popular programming language.";
    }
    
    console.log(greeter) // "say Hello instead"

    // let
    /*
     let name = "Nitish Mehta"; // its throw error 
      console.log(name); //SyntaxError: Identifier 'name' has already been declared
      // we can not declare sane variable with let
      */
      console.log("......................................................");
      let myname = "Nitish Mehta";
          myname = "Variables are containers for storing values.";
      console.log(myname);

      let vari = "Variables are containers for storing data (storing data values).";
      console.log(vari);

      let number = 12;
      if(number % 2 == 0)
      {
        console.log("Given number is even");
      }
      else
      {
        console.log("Given number is not even");
      }

      let person = "John Doe", carName = "Volvo", price = 200;
      console.log(person);
      console.log(carName);
      console.log(price);
      console.log("Check data type");
      let b,f=null, c = 'mehta';
      let d = true;
      console.log(typeof price);
      console.log(typeof carName);
      console.log(typeof c);
      console.log(typeof d);
      console.log(typeof b);
      console.log(typeof f);


      console.log("..................................................");

      let primenum = 13;let count =0;
      for(i = 1; i<=primenum; i++)
      {
        if(primenum % i == 0)
        {
           count++;
        }
      }
      if(count == 2)
      {
        console.log(".......Prime Number.................");
      }
      else{
        console.log("........not prime number....................");
      }

    let num1 = 19, num2 = 20;
    let sum = num1 + num2;
    num1+= num2;  // num1 = num1 + num2
   // sum = sum - (num1+num2); 
    console.log(sum);
    console.log(num1);
    console.log(num1*2);
  

    // Ternory operator
    let age = 14;
    let drive = age>= 18? 'yes':'No';
    console.log(drive);
    let even = 11;
    let checkeven = even % 2 ==0? "Even number":"not even number";
    console.log(checkeven);
  //alert function
 
  /*
      function functionName()
      {
        statement
      }
      */
     function myintro()
     {
        console.log("I am Nitish Mehta");
        console.log("I am Learning JavaScript");
        console.log("I know C#, AdO.Net, Json sever, SQL Server, JavaScript, HTML, CSS");
        console.log("I am Nitish Mehta");
     }


     What is JavaScript
JavaScript (js) is a light-weight object-oriented programming language which is used by several websites for scripting the webpages.
....................................
   3 Places to put JavaScript code
   ................................
1.Between the body tag of html
2.Between the head tag of html
3.In .js file (external javaScript)

JavaScript Comment
There are two types of comments in JavaScript.
Single-line Comment ----// It is single line comment  
Multi-line Comment-------/* your code here  */

"""""JavaScript Variable"""
var:-  If we declare a Variable from var, then we can also declare it again with the same name, and if we want to re-again its value then we can do that too;

let :-If we declare a Variable from let, then we can not declare it again with the same name, but we can re-again its value;

const:- And if we declare Variable with const, we can neither declare it again nor can re-again its value;


/// Javascript Data Types
      /*
       JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript.
       Primitive data type
       Non-primitive (reference) data type

       JavaScript primitive data types
       Data Type
       String:- represents sequence of characters e.g. "hello"
       Number:- represents numeric values e.g. 100
       Boolean:-	represents boolean value either false or true
       Undefined:-	represents undefined value
       Null:=	represents null i.e. no value at all


       JavaScript non-primitive data types
       Object:- represents instance through which we can access members
       Array:-	represents group of similar values
       RegExp:-	represents regular expression
       */
                  Operators
             JavaScript Operators
There are following types of operators in JavaScript.
Arithmetic Operators
Comparison (Relational) Operators
Bitwise Operators
Logical Operators
Assignment Operators(Compound operators)
        

JavaScript Functions
JavaScript functions are used to perform operations. We can call JavaScript function many times to reuse the code.
Advantage of JavaScript function
""""""""""""""""""""""""""""""
There are mainly two advantages of JavaScript functions.

Code reusability: We can call a function several times so it save coding.
Less coding: It makes our program compact. We don’t need to write many lines of code each time to perform a common task.

JavaScript Function Syntax
The syntax of declaring function is given below.
function functionName([arg1, arg2, ...argN]){  
 //code to be executed  
}  


//Function with Return Value