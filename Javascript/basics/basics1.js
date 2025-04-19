//**********   var, let, const : 

const accountId = 12345
var accountEmail = "sachin@google.com"
let accountState = "Bihar"
accountPassword = "abc123"

//console.log(accountId)

accountState = "West Bengal"

//console.table([accountId, accountEmail, accountState, accountPassword])

"use strict"; //treat all JS code as newer version

// alert("hello") // we are using node.js not browser

//code readability matters a lot

//*******************************  DATA TYPES : 
let name = "sachin"
let age = 20
let boolean = true

//number => 2 to power of 53
//bigint
//string
//boolean => true/false
//null -> standalone value (empty)
//undefined

//symbol => unique

//object

// console.log(typeof null)        // object
// console.log(typeof undefined)  // undefined

//Conversion
let score = "33"

// console.log(typeof(score))  //string

let valueNumber = Number(score)  //number 33

//"33"  =>  33
//"33abc" => NaN

let isLoggedin = 1
let boolLogged = Boolean(isLoggedin)
// 1-true  0-false
//"" - false    "sachin"- true

let value = 66
let stringValue = String(value)


//******************** OPERATIONS **********************/

let value1 = 3
let negValue = -value1

// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3)
// console.log(2/3)
// console.log(2%3)

let str1 = "hello"
let str2 = " sachin"
let str3 = str1 + str2
//console.log(str3)

// console.log(1 + "2") 
// console.log("1" + 2)  
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")
// OUTPUT : 
// 12
// 12
// 122
// 32

// console.log(true)  // true
// console.log(+true) // 1
// console.log(true+) => ERROR
// console.log(+"")  // 0

//Comparison

// console.log("2" > 1) //true

// console.log(null > 0)
// console.log( null == 0)
// console.log(null >=0)
//Output 
//false
//false
//true

//reason : comparison operators < > <= >= converts null to number 0.

// strict check:  === also checks for data type
// console.log("2" === 2) // false
// console.log("2" == 2)  // true

/* Premitive Datatypes : these are call by value. ->Stack memory

            Type             typeof

i)           Number          number
ii)          String          string
iii)         Boolean         boolean
iv)          Bigint          bigint
v)           Symbol          symbol
vi)          Null            object
vii)         Undefined       undefined


* Non-Premitive OR Referance OR Object datatype  -> heap memory

            Type              typeof

i)          Object            object
ii)         Array             object
iii)        Function          function(object)
*/
