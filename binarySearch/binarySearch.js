const binarySearch = (list, value) => {

  list.sort(((a, b) => {return a - b}));

  let start = 0
  let stop = list.length - 1
  let middle = Math.floor((start + stop) / 2)


  while (list[middle] !== value && start < stop) {

    if (value < list[middle]) {

      stop = middle - 1

    } else {

      start = middle + 1

    }


    middle = Math.floor((start + stop) / 2);

  }


  return (list[middle] !== value) ? false : true;

}

module.exports = binarySearch;

// big o - Logarithmic - scales well with bigger input