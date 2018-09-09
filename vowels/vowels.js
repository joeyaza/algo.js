const vowels = (str) => {

	const vowels = ["a", "e", "i", "o", "u"];
	let result = 0;

	str = str.toLowerCase();

	for (letter of str) {

		if (vowels.includes(letter)) result ++;

	}


	return result;

}

module.exports = vowels;