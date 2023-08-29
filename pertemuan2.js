console.log('Hacktive Day 2')

//function:
// - mendefinisikan fungsi dimana di panggil terlebih dahulu untuk di exec
// - dapat memanggil diri sendiri
// - dengan parameter ataupun tidak, serta mereturn suatu nilai maupun tidak
// - suatu fungsi yang digunakan untuk menjalankan suatu pekerjaan dengan tujaun untuk menyederhanakan prosesnya
    //arrow function
    //anonymous function

//legacy function
console.log(penjumlahanMethod(22, 23))
function penjumlahanMethod(val1, val2)
{
    return val1 + val2
}
const listnilai = [200, penjumlahanMethod(22, 23)]
console.log(listnilai)

//declaration function
const hasilPenjumlahan = function (arg1, arg2) {
    if(arg1 > 5) {
        return arg1
    } else {
        return arg2
    }
}
console.log(hasilPenjumlahan(2, 8))

//arrow function
const onlyReturn = arg1 => `${arg1} terblender`
const blender = (arg1, arg2) => {
    return arg1 + arg2
}
console.log(onlyReturn('jari'))
console.log(blender("cabe", "rempah"))

//Anonymous Function

//High Order Function
const fungsiMencampurBahan = (listbahan) => {
    console.log(listbahan, "ini dalam fungsi mencampur bahan")
    return listbahan[0] + listbahan[1]
}
const fungsiMemasak = (hasilBahan) => {
    if(hasilBahan==="garamgula") {
        return "asin - manis"
    } else {
        return "hambar"
    }
}
const fungsiSajikan = (hasilMemasak) => {
    if(hasilMemasak==="asin - manis"){
        return ["mohani", "thomas", "dio", "nabil", "fahri"]
    } else if(hasilMemasak==="hambar") {
        return ["krisna"]
    } else {
        return ["kevin", "archil", "dita"]
    }
}
const membuatMakanan = (bahan, mencampurbahan, memasak, sajikan) => {
    const hasilolahan = mencampurbahan(bahan)
    const hasilmemasak = memasak(hasilolahan)
    const hasilsajian = sajikan(hasilmemasak)
    console.log("hasilolahan: "+hasilolahan)
    console.log("hasilmemasak: "+hasilmemasak)
    console.log("sajikan: "+hasilsajian)
}
membuatMakanan(["garam", "gula", "bawang"], fungsiMencampurBahan, fungsiMemasak, fungsiSajikan)

const hero = {
    name: "Uzumaki Naruto",
    power: ["Ceramah no jutsu", "Kagebunshin"],
    biju: "Nine Tail",
    weakness: "Ootsutsuki",
    color: "Orange",
    "gender": "male",
    gantiWeakness: function () {
        if(this.weakness==="Ootsutsuki") {
            this.weakness = "Borutod"
        } else {
            this.weakness = "God"
        }
    }
}
//create
hero.attributes = ["fire", "water", "wind", "thunder"] //dot notation
hero["wife"] = "Hinata"
hero.heroJob = function () {
    return "Protect the village"
}
console.log(hero)

//update
hero.name = "Narutod"
hero["biju"] = null
console.log(hero)

//delete
delete hero["color"]
delete hero.gender
console.log(hero)
console.log(hero.heroJob())

//this
console.log(this)
function CobaCoba () {
    this.name = "kevin"
    console.log(this, "didalam function")
}
new CobaCoba()
hero.gantiWeakness()
console.log(hero)

const heroes = ["Naruto", "Luffy", "Ichigo", "Gundala", undefined]
const nilai  = [23, 54, 24, 7, 1, ,22]
const newHeroes1 = heroes.map((value, index)=>{
    if(value==="Luffy")
    {
        return value + " myantihero"
    }
    return value + " myhero"
})
console.log(newHeroes1)
heroes.forEach((value, index)=>{
    console.log(value, index)
})
heroes.map

//filter
// const filterValueStartWithL = heroes.filter((value) => {
//     return value[0] === "l"
// })
// console.log(filterValueStartWithL, "")

//find
// const filterValueStartWithN = heroes.find((value) => {
//     return value[0] === "s"
// })
// console.log(filterValueStartWithN, "")

//reduce
const summary = nilai.reduce((prev, next, index) => {
    console.log(prev, next)
    return prev
}) 
console.log(summary)

//destructed

const person = {
    name: "Kevin William",
    kriteria: {
        age: 22,
        weight: 50,
    },
    hobbies: ['tidur', 'main']
}
const [hobbypertama, hobbkedua] = hobbies
const {age, weight} = kriteria
console.log(person)