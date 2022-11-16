const personArray = [
    'Aravinda', 'HB' , 'Trainer', 2022-1983, ['harry','Nandi','Shivu']
]

const personObject = {
    fname: "Aravinda",
    lname: "HB",
    jdesc: "Trainer",
    age: 2022-1983,
    friends : ['harry','Nandi','Shivu'],
    getFullName : function() {
        console.log(this.fname + " " + this.lname);
    }

}

const person2 = personObject;



console.log(personObject.fname);
console.log(personObject['fname']);
console.log(personObject['friends'][0]);
personObject.getFullName();

console.log(person2.fname);