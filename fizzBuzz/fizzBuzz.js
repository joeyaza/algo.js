const fizzBuzz = (int) => {

	let results = [];

	for (let i = 1; i <= int; i ++) {

		if (i % 5 === 0)  results.push("fizzbuzz");

		else if (i % 3 === 0) results.push("buzz");

		else if (i % 2 === 0) results.push("fizz");

		else results.push(i);

	}

	return results;

}

module.exports = fizzBuzz;