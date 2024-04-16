/* console.log('hello world')

const user = {
    name:'bachi',
    age:21,
    getAge: function() {
        console.log(this.age)
    }
}   */

const obj1 = {
    name:'giorgi',
    color:'blue'
}

const obj2 = {
    year:21,
    dogNAme:'Dogii'
}
 const merg = Object.assign(obj1,obj2)
console.log(merg)
console.log(obj1)


/* console.log(user) */

/* for(let key in user){
    console.log(user[key])
} */


/* const values = Object.entries(user)
console.log(values)

for(let [key,value] of Object.entries(user)){
    console.log(key)
    console.log(value)
 */

/* const resilt = []
 for(let key in user){
    resilt.push([user[key,user[key]]])
 }

 console.log(resilt) */






