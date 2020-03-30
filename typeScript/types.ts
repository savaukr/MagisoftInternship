const str:string='HEllo';
console.log(str);

let  isFetching: boolean = true;
let int:number = 42;
isFetching = true

let numberArray: number[] = [1,1,2,3,5,8,13];
const numberArray1: Array<number> = [1,1,2,3,5,8,13];
const words: string[] = ['hello', 'Typescript'];
//Tuple
const contact:[string, number] = ['Vladilen', 1234567];
//Any
let variable:any =  42;
variable = 'New String';
//
function sayMyName(name:string):void {
    console.log(name)
}
sayMyName('Huizinberg');
//Never
function myError (message:string): never {
    throw new Error(message);
}
//Type
type Login = string
const login: Login = 'admin'
type LogIn = string[]
const logIn: LogIn = ['user', 'password']
console.log(logIn);
type SomeType = string|null|undefined
//interface
interface Rect {
    readonly id:string
    color?: string
    size: {
        width: number
        height: number
    }
}
const rect1: Rect = {
    id:'4',
    size: {
        width: 3,
        height: 3
    }
}
const rect2: Rect = {
    id:'123445',
    size: {
        width: 10,
        height: 5
    }
}

interface rectWithArea extends Rect {
    getArea: ()=> number
}

const rect5: rectWithArea = {
    id: '1234',
    size: {
        width: 20,
        height: 20
    },
    getArea():number {
        return this.size.width*this.size.height
    }
}
console.log(rect5.getArea())

//------------------------------------------
