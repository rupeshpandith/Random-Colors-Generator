console.log("Hello, World!");

const student = {
    name : "Rupesh Pandith",
    age: 19,
    marks: 90,
    city: "Mumbai"
};
console.log(student);

function hello(){
    console.log("Hello World!");
}
hello();

const calculator = {
    add: function(a, b){
        return a + b;
    },
    //or add(a, b) { return a + b; }
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a*b;
    },
    div: function(a, b){
        return a/b;
    }
}

function thisFunction(){
    console.log(this);
}
thisFunction();//when we create the html file and opens it in browser, it makes the window object as this and the output will be that window object:
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

console.log("Hello");

let intervalId = setInterval(() => {
    console.log("Hello after 1 second");
}, 1000);
console.log("Hello before timeout");

console.log(intervalId); //it will print an ID that can be used to clear the interval
clearInterval(intervalId); // This will stop the interval from running

let arr = [1, 2, 3, 4, 5];

// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print); // This will print each element of the array
//or
arr.forEach(function(el){
    console.log(el);
});

let newArr = arr.map(function(el){
    return el * 2;
})
console.log(newArr);

let even = arr.filter( num => (num % 2 == 0));
console.log(even);

console.log(arr.every(el => (el > 0))); // true //returns true if every element satisfies the condition
console.log(arr.some(el => (el > 3))); // true //returns true if at least one element satisfies the condition

let final_value = arr.reduce((res, el) => res + el); //reduce method
console.log(final_value);

let max = arr.reduce((el1, el2) =>{  //finding max using reduce method.
    if(el1 > el2){
        return el1;
    }else{
        return el2;
    }
});
console.log(max);

console.log(...arr);  //spread method
console.log(..."Rupesh Pandith");
let min = Math.min(...arr); console.log(min); //using spread method in min , provides the Math.min function with the each and every elements of array seperately.
const data = {
    email: "rupeshpandith1836@gmail.com",
    pass: "rupesh",
};
const dataCopy = {...data, id: 123, country: "india"}; console.log(dataCopy);
let obj = {..."Hello"}; console.log(obj);

function rest(...args) {
    for(let i = 0; i < args.length; i++ ){
        console.log("You gave us : ", args[i]);
    }
};

function arg(){
    console.log(arguments); // it is the collection of the argument passed to it
};
console.log(arg(1, 2, 3, 4));

let names = ["tony", "bruce", "thor", "strange"];       //destruction method
let [winner, runnerup] = names;
console.log(winner+",", runnerup);