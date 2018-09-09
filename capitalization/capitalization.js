const capitalization = (str) => {

	let strArr = str.split(" "),
	result = [];

	for (word of strArr) {

		result.push(word[0].toUpperCase() + word.slice(1));

	}

	return result.join(" ");

}

module.exports = capitalization;