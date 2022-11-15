numbers = [1,2,3,4,5,6,7,8,9]
console.log(numbers);

let fruits = ['Apple','Mango','Grapes','Banana']

console.log(fruits);


//insert the element at the end
fruits.push("Cherry")
console.log(fruits);

//insert the element in begining
fruits.unshift("Lemon")
console.log(fruits);

//remove the element at the end
fruits.pop()
console.log(fruits);

//remove the element from the begining
fruits.shift()
console.log(fruits);

// remove the element but reserve the index
delete fruits[1]
console.log(fruits);

fruits[1] = "Orange"
console.log(fruits);

let slicefruits = fruits.slice(0,2);
console.log("slice fruits " +  slicefruits);
console.log(fruits);

//splice to get a sub array
//let nfruits = fruits.splice(0,2)
//console.log(nfruits);
//console.log(fruits);


let oddnum = [1,3,5,7]
let evennum = [2,4,6,8]

let num = oddnum.concat(evennum, fruits)

console.log(num);

console.log(fruits.join(" $ "));

fruits.splice(0,0,"New Mango", "New Orange")
console.log(fruits);


