const sieveOfEratosthenes = (int) => {

	const sieve = new Array(int).fill(true);

	for (let i = 2; i < Math.sqrt(int); i++) {

		for (let j = 2; j * i < int; j ++) { // because i * j is each multiple of current index

			sieve[i * j] = false;

		}

	}

	return sieve.reduce((primes, primeNumber, index) => {

		if (primeNumber) {

			primes.push(index);

		}

		return primes;

	}, []);

};

module.exports = sieveOfEratosthenes;