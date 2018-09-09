const ransomNote = (noteText, magazineText) => {

	let noteArr = noteText.split(" "),
		magazineArr = magazineText.split(" "),
		magazineObj = {};


	magazineArr.forEach(word => {

		magazineObj[word] = magazineObj[word] + 1 || 1;

	});


	let isPoss = true;

	noteArr.forEach(word => {

		if (magazineObj[word]) {

			magazineObj[word] --; 

			if (magazineObj[word] < 0) isPoss = false;

		} else isPoss = false;


	});

	return isPoss;


}

module.exports = ransomNote;