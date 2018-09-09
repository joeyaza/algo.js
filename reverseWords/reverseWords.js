const reverseWords = (str) => {

	let wordsArr = str.split(" "),
		result = [];

	for (word of wordsArr) {

		result.push(word.split("").reverse().join(""));

	}

	return result.join(" ");

}

module.exports = reverseWords;