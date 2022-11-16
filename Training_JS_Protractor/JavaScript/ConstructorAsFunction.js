function createPerson(fn,ln,jt,age) {
    const personObject = {
        fname: fn,
        lname: ln,
        jdesc: jt,
        age: age,
        getFullName : function() {
            console.log(this.fname + " " + this.lname);
        }
    
    }
    return personObject;
}


const p1 = new createPerson("A","B","C",55);
const p2 = new createPerson("AA","BB","CC",55);
const p3 = new createPerson("AAA","BBB","CCC",55);
p1.getFullName()
p2.getFullName()
p3.getFullName()