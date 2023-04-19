import { Level } from "./web.js";

export abstract class Base {
	id: string = "";
	level = Level.Inline;
	tags: Tag[] = [];
	style: Partial<CSSStyleDeclaration> = {};
	event: Interactor[] = [];
	constructor({}: Partial<{ [k in keyof Base]: Base[k] }>) {}
	editStyle(styles: Partial<CSSStyleDeclaration>) {
		Object.assign(this.style, styles);
	}
}

type Bases = Container | Dataset | Text | Interactor | Asset;

export class Tag extends Array<Bases> {
	replace(base: Base, value: Base): boolean {
		const index = this.indexOf(base);
		return index == -1 ? ((this[index] = value), true) : false;
	}
}
export class Container extends Base {
	constructor(public id: string, public children = new Tag) {
		super({ id });
	}
}
export class Dataset extends Container {}

export class Text extends Base {}
export class Interactor extends Base {}
export class Asset extends Base {}
