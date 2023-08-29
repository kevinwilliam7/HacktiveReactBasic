const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })

function makeAllCaps(array) {
  return new Promise((resolve, reject) => {
    const capitalizedArray = array.map(item => {
      if (typeof item === 'string') {
        return item.toUpperCase();
      } else {
        return item;
      }
    });

    if (capitalizedArray.length === array.length) {
      resolve(capitalizedArray);
    }
  });
}

function sortWords(array) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(array)) {
      resolve(array.sort());
    } else {
      reject('Error, harus array');
    }
  });
}
