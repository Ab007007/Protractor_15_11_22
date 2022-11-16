const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})
let i = 1

readline.question('Enter the Number ?', num => {
    console.log(`User entered ${num}`);
    do {
        console.log(`${num} * ${i} = ${num * i}`);
        i++;
    }while (i <=10) 

    readline.close();
})



