interface Person {
	name: string
	age: number
}
type PersonKeys = keyof Person // 'name' | 'age'
let key: PersonKeys = 'name'
key = 'age'
//key = 'job'

type User = {
	_id: number
	name: string
	email: string
	createdAt: Date
}
type UserkeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> //  'name' | 'email'

let user1: UserkeysNoMeta1 = 'name'
//user1 = "_id"