const maxCharacter = (str) => {

	const charMap = {};

	for (let i = 0; i < str.length; i ++) {

		charMap[str[i]] = charMap[str[i]]+1 || 1;

	}

	let maxCount = 0;
	let maxCharacter = null;

	for (let char in charMap) {

		if (charMap[char] > maxCount) {
			
			maxCount = charMap[char];

			maxCharacter = char;

		}

	}

	return maxCharacter;

}

module.exports = maxCharacter;