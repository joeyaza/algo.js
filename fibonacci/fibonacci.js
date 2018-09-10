//Recursive & Exponential => O(2 ** n)
const fibonacci = (int) => {

	if (int < 2) return int;

	return fibonacci(int - 1) + fibonacci(int - 2);

}

//Iterative & Linear => O(n)
const fibonacci2 = (int) => {

  const result = [0, 1];

  for (let i = 2; i <= int; i ++) {

    const a = result[result.length - 1];

    const b = result[result.length - 2];

    result.push(a + b);

  }

  return result[result.length - 1];

};



module.exports = fibonacci;