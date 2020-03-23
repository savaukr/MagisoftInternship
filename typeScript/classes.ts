class Typescript {
	version: string

	constructor(version: string) {
		this.version = version
	}

	info(name: string) {
		return `[${name}]: Typescript version is ${this.version}`
	}
}
/*
class Car {
	readonly model: string
	readonly numberOfWheels: number = 4

	constructor(theModel:string) {
		this.model = theModel
	}
}
*/
//ідентичний запис
class Car {
	readonly numberOfWheels: number = 4

	constructor(readonly model: string) {}
}
//------------------------------
class Animal {
	protected voice: string =''
	public color: string = 'black'

	private go() {
		console.log('Go')
	}
}
class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice
	}
	public getVoice():string {
		return this.voice
	}
	// не спрацює this.go()	
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.getVoice())
console.log(cat.color)
// не спрацює cat.voice

//------------------------------
abstract class Component {
	abstract render(): void
	abstract info(): string
}

class AppComponent extends Component {
	render(): void {
		console.log('component on render')
	}
	info(): string {
		return 'This is info'
	}
}

const appComponent = new AppComponent()
appComponent.render()
console.log(appComponent.info())