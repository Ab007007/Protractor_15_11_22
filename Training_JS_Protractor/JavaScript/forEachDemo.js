let fruits = ['Apple','Mango','Grapes','Banana']

fruits.forEach(function(fruit)
{
   console.log(fruit);     
})


fruits.forEach(fru =>
{
    console.log(`from arrow function ${fru}`);
})

// fruits.forEach(function(){})