const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
})


readline.question('Who are you?', name => {
    console.log(`User entered ${name}`);
    readline.close();
})