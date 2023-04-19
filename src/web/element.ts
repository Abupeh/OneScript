class Element {
	constructor(public id: string, public tags: string[]) {}
}
export class Container extends Element {}
export class Text extends Element {}
export class Interactor extends Element {}
export class Dataset extends Element {}
export class Asset extends Element {}
