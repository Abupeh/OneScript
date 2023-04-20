abstract class Base {
	protected element!: HTMLElement;
	protected static set: Partial<{ [key in Level | Assets]: ElementMap }>;
	id: string = "";
	level = Level.Inline;
	tags: Tag<Bases>[] = [];
	style: CSSStyles = {};
	event: Interactor[] = [];
	constructor({}: Partial<{ [k in keyof Base]: Base[k] }>) {}
	editStyle(styles: CSSStyles) {
		Object.assign(this.style, styles);
	}
}
type CSSStyles = Partial<CSSStyleDeclaration>
type ElementMap = keyof HTMLElementTagNameMap;

abstract class Tag<T extends Bases> extends Array<T> {
	replace(base: T, value: T): boolean {
		const index = this.indexOf(base);
		return index == -1 ? ((this[index] = value), true) : false;
	}
}

export enum Level {
	Inline = "Inline",
	Block = "Block",
}
export enum Assets {
	Video= "Video",
	Image = "Image",
	Audio = "Audio",
}

export type Bases =
	| Container<Bases>
	| Dataset<Bases>
	| Text
	| Interactor
	| Asset;

export class Container<T extends Bases = Bases> extends Base {
	protected static set = {
		[Level.Inline]: "div" as ElementMap,
		[Level.Block]: "span" as ElementMap
		
	}
	constructor(properties: Partial<{ [k in keyof Base]: Base[k] }>, private load: T[] = []) {
		super(properties);
		this.element = document.createElement(Container.set[this.level]);
	}
	add(...bases: T[]): T[] {
		this.load.push(...bases);
		return []
	}
}
export class Dataset<T extends Bases> extends Container<T> {}

export class Text extends Base {}
export class Interactor extends Base {}
export class Asset extends Base {}
