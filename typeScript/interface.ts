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
const rect4 = {} as Rect

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
interface IClock {
    time: Date
    setTime(date: Date): void 
}
class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//-----------------------

interface IStyles {
    [key:string] : string
}

const css: IStyles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
console.log(css)