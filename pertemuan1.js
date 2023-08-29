console.log('test');

// variable declaration
var test = 'anjas'

// variable name

//var
var nama = "kevin"
var nama = "william"
console.log(nama)

//let
let hobby = "nonton"
hobby = "main"
console.log(hobby)

//const
const gender = 'laki-laki'
console.log(gender)

// type data
let today = new Date().toDateString();
console.log(today)

let hobbyArray = ['main', 'nonton']

const person = {
    name: "kevin william",
    age: 20,
    hobby: hobbyArray,
    isMarried: false,
    nickname: () => "kevin",
}
console.log(person)


//create
hobbyArray.push("balap")
console.log(hobbyArray)
hobbyArray.unshift("kelahi")
console.log(hobbyArray)
hobbyArray = [...hobbyArray, "test"]
console.log(hobbyArray)

//delete
hobbyArray.pop()
console.log(hobbyArray)
hobbyArray.shift()
console.log(hobbyArray)

hobbyArray.push(Symbol("#213"))
console.log(hobbyArray)


console.log(hobbyArray.splice(0, 2))
console.log(hobbyArray.slice(0, 1))

let hobbyArray2 = ['membunuh', 'menjahili']
let allHobbyArray = [...hobbyArray, ...hobbyArray2]
console.log(allHobbyArray)

