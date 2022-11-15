let addition = 
function(a,b) {
    console.log(arguments);
    console.log(`Sum of two numbers is ${a+b}`);
    if(arguments[2]) {
        let sum = a + b + arguments[2];
        console.log(sum);
    }
}

addition(55,55)
addition(1,2,3)