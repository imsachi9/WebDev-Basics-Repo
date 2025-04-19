console.log("Hello there");

function sum(a,b){
    return a+b;
}

//function expression
const add = function(a,b){
    return a+b;
};

//arrow function
const subs = (a,b) => a-b;

const val1 = sum(2,2)
const val2 = add(2,2)
const val3 = subs(2,2)

console.log("val1 : ", val1);
console.log("val2 : ", val2);
console.log("val3 : ", val3);