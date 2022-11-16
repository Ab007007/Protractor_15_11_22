const resto = new Map()
resto.set('name', 'Nandana Palace')
resto.set(1,'Bangalore,Pune,Hyd')
resto
.set('categories',['Indian','Chines'])
.set('open',11)
.set('close',23)
.set(true,'We are open')
.set(false, 'We are closed')


console.log(resto.get('name'));
console.log(resto.get('cagegories'));

console.log(resto.has('open'));
console.log(resto.entries());

resto.forEach(ele => {
    console.log(ele);
})