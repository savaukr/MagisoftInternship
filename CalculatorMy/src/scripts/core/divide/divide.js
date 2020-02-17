const divide = (a, b) => {
	if (b != 0) return a/b
		else throw new Error('Ділення на нуль неможливе');
};
export {divide};