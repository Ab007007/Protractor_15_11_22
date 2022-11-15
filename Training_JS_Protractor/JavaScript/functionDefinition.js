function add(a=0,b=0) {
    console.log(arguments);
    console.log(`Sum of two numbers is ${a+b}`);
    if(arguments[2]) {
        let sum = a + b + arguments[2];
        console.log(sum);
    }
}

add(22,55)
add(22)
add(22,55,555)