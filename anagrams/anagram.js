const anagram = (str1, str2) => {

	str1 = str1.replace(/[^a-zA-Z0-9]/g, '').split("").sort().join("").toLowerCase(),
	str2 = str2.replace(/[^a-zA-Z0-9]/g, '').split("").sort().join("").toLowerCase();

	return str1 === str2;


} 

module.exports = anagram;