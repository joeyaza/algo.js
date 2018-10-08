const letterAddition = (str) => {

	let result = "",
		count = 1;


	for (let i = 0; i < str.length; i ++ ) {

		let current = str[i],
			next = str[i+1];

		if (current === next) count++;

		if (current !== next) {

			result += current + count;
			count = 1;

		}

	}	

	return result;
	

}

module.exports = letterAddition;