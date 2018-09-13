const selectionSort = (arr) => {

    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {

        let min = i;

        for (let j = i + 1; j < length; j++) {

            if (arr[j] < arr[min]) {

                min = j;

            }

        }

        if (min !== i) {

            let tmp = arr[i];

            arr[i] = arr[min];

            arr[min] = tmp;

        }

    }

    return arr;

};

module.exports = selectionSort;
