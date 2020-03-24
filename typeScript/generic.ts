const arrayOfNumbers: Array<number> = [1,1,2,3,5]
const arrayOfStrings: Array<string> = ['hello', 'my friends']

function revers<T>(array: T[]): T[] {
	return array.reverse()
}
console.log(revers(arrayOfNumbers))
console.log(revers(arrayOfStrings))