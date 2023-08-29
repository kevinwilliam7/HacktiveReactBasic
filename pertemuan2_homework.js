const videoData = [
  {
    name: 'Miss Scarlet',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  },
  {
    name: 'Rusty',
    present: false,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  },
  {
    name: 'Colonel Mustard',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  },
  {
    name: 'Professor Plum',
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      'dining room': false,
      'billiard room': false,
      library: false
    }
  }
]

let datafalse = []
let datatrue = []
let jumlahfalse = 0
let jumlahtrue = 0
videoData.map((value, index) => {
  if(value.present===false) {
    jumlahfalse += 1
    datafalse.push({name: value.name, present: value.present, rooms: value.rooms})
  } else {
    jumlahtrue += 1
    datafalse = [{name: value.name, present: value.present, rooms: value.rooms}]
    datatrue.push({name: value.name, present: value.present, rooms: value.rooms})
  }
});
console.log("Jumlah Present False: "+jumlahfalse)
console.log(datafalse)
console.log("Jumlah Present True: " +jumlahtrue)
console.log(datatrue)

