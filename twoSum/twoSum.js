const twoSum = (numArr, sum) => {

	// [1, 2, 2, 3, 4], 4 => [[2, 2], [3, 1]]

	let pairs = [],
		hashTable = [];

	for (let i = 0; i < numArr.length; i ++) {

		let currNum = numArr[i],
			counterPart = sum - currNum;

		if (hashTable.indexOf(counterPart) !== - 1) {

			pairs.push([currNum, counterPart]);


		}

		hashTable.push(currNum);


	}

	return pairs;

}

module.exports = twoSum;