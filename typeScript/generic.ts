const arrayOfNumbers: Array<number> = [1,1,2,3]
const arrayOfStrings: Array<string> = ['hello', 'my friends']

function revers<Y>(array: Y[]): Y[] {
	return array.reverse()
}
console.log(revers(arrayOfNumbers))
console.log(revers(arrayOfStrings))