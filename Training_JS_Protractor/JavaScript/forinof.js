let fruits = ['Apple','Mango','Grapes','Banana']

for (let i in fruits) {
    console.log(`fruits at index ${i} is ${fruits[i]}`);
}

for(let fruit of fruits) {
    console.log(fruit);
}