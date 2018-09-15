const quickSort = arr => {

    if (arr.length < 2) return arr;

    const pivot = arr[arr.length - 1];

    const left = [],

        right = [];

    for (let i = 0; i < arr.length - 1; i++) {

        if (arr[i] < pivot) left.push(arr[i]);

        else right.push(arr[i]);
        
    }

    return [...quickSort(left), pivot, ...quickSort(right)];

}



module.exports = quickSort;