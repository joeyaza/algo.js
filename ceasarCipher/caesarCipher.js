// const caesarCipher = (str, int) => {

// 	// abc, 1 = bcd

// 	const alphabet = "abcdefghijklmnopqrstuvwxyz".split(""),
// 		lowerStr = str.toLowerCase();
// 		result = "";

// 	for (let i = 0; i < lowerStr.length; i ++) {

// 		let pos = alphabet.indexOf(lowerStr[i]) + int,
// 			alphaPos = alphabet[pos];

//         if (alphabet.indexOf(lowerStr[i]) === -1) {

//             result += lowerStr[i];

//             continue;
        
//         }

// 		let index = alphabet.indexOf(lowerStr[i]) + int % 26;

//         if (index > 25) index -= 26;

//         if (index < 0) index += 26;

//         result += lowerStr[i] === lowerStr[i].toUpperCase() ? alphabet[index].toUpperCase() : alphabet[index];

                
//     }

// 	return result;

// }


// module.exports = caesarCipher;