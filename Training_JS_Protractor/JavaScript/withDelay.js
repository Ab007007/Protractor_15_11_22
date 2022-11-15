console.log("Program started");
let welcome = () => console.log("Welcome to Arrow Function");



let addValues = async (a,b) => {
    console.log(`Addition :  ${a + b}`);
    await delay(5000)
}
welcome()
addValues(2000, 1234)

console.log("Program Ended");