// #1 დომში გამოიტანს იმ ტექსტს,რასაც გადავცემთ ინფუთში

// let username
// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").value
//     console.log(username)
//     document.getElementById("myLabel").innerHTML ="hello" + username
// }

// #2 ფრომფთში რა ასაკსაც გადავცემთ უმატებს ერთს და გილოცავს.
// #2 x,y,z JavaScript-ის ტიპები(არასრული)

/* let age = window.prompt("How Old Are You")
age = Number(age)
age += 1


console.log("Happy Birthday! You are",age,"Years Old") */

/* let x
let y
let z

x = Number("3.14")
y = String(3.14)
z = Boolean("")
console.log(x, typeof x)
console.log(y, typeof y)
console.log(z, typeof z) */

// #3 const-რომელიც არ იცვლება
// #3 რადიუსის ფორმულა C=2pr

/* const p = 3.14159
let radius
let circumference


radius = window.prompt("Enter the radius of a circle")
radius = Number(radius)
circumference = 2 * p * radius

console.log("The circumference is:", circumference) */

// #4 Math

// let x = 3.14
// let y = 5
// let z = 9
// let maximum
// let minimum

// x = Math.round(x) // მათემატიკურად ამრგვალებს 3.1 = 3 || 3.5 = 4
// x = Math.floor(x) // ყოველთვის ამრგვალებს ნაკლებობისკენ 3.9 = 3
// x = Math.ceil(x) // ყოველთვის ამრგვალებს მეტობისკენ 3.1 = 4
// x = Math.pow(x,3) // მეორე პარამეტრად, რომელ რიცხვსაც გადავცემთ იმ ხარისხში აიყვანს
// x = Math.sqrt(x) // იღებს ფესვს
//x = Math.abs(x) // ნეგატივი რიცხვი გადაჰყავს დადებითში

// x = Math.PI

// maximum = Math.max(x,y,z)
// minimum = Math.min(x,y,z)

// console.log(maximum)
// console.log(minimum)
// console.log(x)

// #5 hypotenuse calc practice program

// let a;
// let b;
// let c;

/* a = window.prompt("Enter side A")
a = Number(a)

b = window.prompt("Enter side B")
b = Number(b)

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2))

console.log("Side C:",c) */

// show example in DOM

// document.getElementById("Submit").onclick = function () {
//   a = document.getElementById("aTxt").value;
//   a = Number(a);

//   b = document.getElementById("bTxt").value;
//   b = Number(b);

//   c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//   document.getElementById("cLabel").innerHTML = 'Side C:' + c

//   console.log("Side C:", c);
// };

// #6 Counter Program

// let count = 0

// document.getElementById("decreasebtn").onclick = function(){
//     count -=1
//     document.getElementById("countLabel").innerHTML = count
// }
// document.getElementById("resetbtn").onclick = function(){
//     count = 0
//     document.getElementById("countLabel").innerHTML = count
// }
// document.getElementById("increasebtn").onclick = function(){
//     count +=1
//     document.getElementById("countLabel").innerHTML = count
// }

// #7 random number generator

/* let x 
let y 
let z 

document.getElementById("rollbutton").onclick = function () {
   x = Math.floor(Math.random() * 6) + 1;
   y = Math.floor(Math.random() * 6) + 1;
   z = Math.floor(Math.random() * 6) + 1;

   document.getElementById("xlabel").innerHTML = x
   document.getElementById("ylabel").innerHTML = y
   document.getElementById("zlabel").innerHTML = z

   if(x === y && y === z){
    document.getElementById("jack").innerHTML = "You Won Jackpot"
   }else{
     document.getElementById("jack").innerHTML = "try again"
   }
}; */

// #8 useful string properties & methods

// let userName = "Bro Code"
// let phoneNumber ="123-456-789"

// console.log(userName.length) აკონსოლებს სტრინგის სიგრძეს
// console.log(userName.charAt(0)) რა რიცხვსაც გადავცემთ შესაბამისად ნუმერაციით რომელი ასოც შეესაბამება იმას დააკონსოლებს
// console.log(userName.indexOf("o")) იგივეს აკეთებს რასაც charAt უბრალოდ რიცხვის მაგივრად გადავცემთ ასოს(string)-ს
// console.log(userName.lastIndexOf("o")) მაგალითად თუ სტრინგში გვაქვს რი ერთნაირი ასო ან სამი ან ათი ბოლოს ინდექსს აიღებს და დააკნსოლებს ნუმერაციით მერამდენეც იქნება
// userName = userName.trim() იმ შემთხვევაში თუ გვაქვს ასეთი შემთხვევა "   giorgi   " ჩვენი JavaScript აღიქვამს ამ დაშორებებს როგორც სიგრძედ და length-ის გაგების დროს შეგვიყვანს შეცდომაში Trim() გვაზღვევს ამისგან და ამ დაშორებებს(space)-ეებს არ აძლევს უფლებას რომ სტრინგის ნაწილი იყოს
//userName = userName.toUpperCase() სტრინგი გადაყავს დიდ ასოებში
//userName = userName.toLowerCase() სტრინგი გადაყავს პატარა ასოებში
//phoneNumber = phoneNumber.replaceAll("-","/") პირველ პარამეტრად ვატანთ იმას რაც გვინდა რომ შეიცვალოს და მეორე პარამეტრად იმას რითიც გვინდა რომ შეიცვალოს

// console.log(phoneNumber)

// #9 string slicing
// Slice() იღებს სტრიქონის მონაკვეთს და აბრუნებს ახალ სტრიქონს ისე რომ ორიგინალ სტრინქონს არ უკეტებს მდიფიკაციას

// let FullName = "Snoop Dogg"
// let firstname
// let lastname

// firstname = FullName.slice(0,3)
// lastname = FullName.slice(4)

// firstname = FullName.slice(0,FullName.indexOf(" "))
// lastname = FullName.slice(FullName.indexOf(" ") + 1)

// console.log(firstname)
// console.log(lastname)

// #10 method chaining = calling one method after another in one continious line of code

// let userName = "bro"

// let letter = userName.charAt(0).charAt().toUpperCase().trim()

// console.log(letter)

// #11 if Statement

// let age = 65;

// if (age >= 65) {
//   console.log("you are a senior citizen!");
// } else if (age >= 18) {
//   console.log("you are a senior adult!")
// }else if(age <0){
//   console.log("You haven't been born yet!");
// }else {
//   console.log("you are a child!");
// }

// let online = true;

// if (online) {
//   console.log("you are online");
// } else {
//   console.log("  you are offline");
// }



// #11 chcked property

// document.getElementById("myButton").onclick = function(){
//   const isChecked = document.getElementById("myCheckBox")
//   const visa = document.getElementById("visaBtn")
//   const master = document.getElementById("masterBtn")
//   const paypal = document.getElementById("PayPalBtn")
//   if(isChecked.checked){
//     console.log("You are Subscribed")
//   }else{
//     console.log("You are not Subscribed")
//   }

//   if(visa.checked){
//     console.log("you are paying with visa")
//   }else if(master.checked){
//     console.log("you are paying with master")
//   }else if(paypal.checked){
//     console.log("you are paying with Paypal")
//   }else{
//     console.log("You must select a payment type!")
//   }
// }


// #12 Switch/Case


// let grade = "D"
// switch(grade){
//   case "A":
//     console.log("You did great!")
//     break;
//   case "B":
//     console.log("You did good")
//     break;
//   case "C":
//     console.log("You did okay!")
//     break;
//   case "D":
//     console.log("You passed ... barely!")
//     break;
//   case "F":
//     console.log("You FAILED!")
//     break;
//     default:
//       console.log(grade, "Is not a letter grade")
// }



// #13 and or logical operators
/* 
let temp = 15
let sunny = true

if(temp > 0 && temp < 30 && sunny){
  console.log("The weather is good")
}else{
  console.log("The weather is bad")
}
 */