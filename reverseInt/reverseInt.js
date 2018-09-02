const reverseInt = (int) => {

	let intStr = int.toString();

	if (intStr[0] === "-") {

		revInStr = intStr.substring(1).split("").reverse().join(""); 

		return Number("-" + revInStr);

	}

	revInStr = intStr.split("").reverse().join("");

	return Number(revInStr);

}

module.exports = reverseInt;