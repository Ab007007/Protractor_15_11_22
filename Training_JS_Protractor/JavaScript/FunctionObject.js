function createPerson(fn,ln,jt,age) {
    
        this.fname =  fn,
        this.lname = ln,
        this.jdesc = jt,
        this.age = age        
    }
    
getFullName = function() {
        console.log(this.fname + " " + this.lname);
    }


const p1 = new createPerson("A","B","C",55);
const p2 = new createPerson("AA","BB","CC",55);
const p3 = new createPerson("AAA","BBB","CCC",55);

getFullName.call(p1)
getFullName.call(p2)
getFullName.call(p3)