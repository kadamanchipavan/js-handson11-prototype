// 1Q
let parent={
    firstname:"pavan",
    lastname:"kumar",
    fullname(){
        return (this.firstname+""+ this.lastname);
    }
};
const child={
   __proto__:parent
};
console.log(child.fullname())

//2Q
function Person(){
    this.name="pavan"
}
Person.prototype.name="nithin"
Person.prototype.age=23
const Person1=new Person();


console.log(Person1.name)
console.log(Person1.age)
//3Q
Array.prototype.sum = function() {
    let sum = 0;
          for (let i = 0; i < this.length; i++) 
              sum += this[i]; 
          return sum; 
};
let arr = [2,5,7,6,4];
console.log(arr.sum())
//4Q
let parent1={
    name:"pavan",
    age:23,
    gender:"male"
}
let child1={
 __proto__:parent1,
 college:"sriindu",
}
for(let prop in child1)
    console.log(prop);
