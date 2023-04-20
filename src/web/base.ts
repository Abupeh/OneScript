abstract class Base {
	protected element!: HTMLElement;
	protected static set: BaseEdits;
	protected static createElement(
		set: typeof Base.set,
		base: Bases
	): HTMLElement {
		const element = document.createElement(set[base.level] as ElementMap);
		element.id = base.id;
		Object.keys(base.style).forEach((key) => console.log(key));
		return element;
	}
	id: string = "";
	level = Level.Inline;
	tags: Tag<Bases>[] = [];
	style: BaseStyles = {};
	event: Interactor[] = [];
	constructor(properties: BaseProperties) {
		Object.assign(this, properties);
	}
	editStyle(styles: BaseStyles) {
		Object.assign(this.style, styles);
	}
}
// type CSSStyles = Partial<CSSStyleDeclaration>
type BaseStyles = {
	[k in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[k] & null;
}
//! fix



type BaseProperties = { [k in keyof Base]?: Base[k] };
type BaseEdits = { [key in Level | Assets]?: ElementMap };
type ElementMap = keyof HTMLElementTagNameMap;

class Tag<T extends Bases> extends Array<T> {
	constructor(public name: string, ...bases: T[]) {
		super(...bases);
	}
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
	Video = "Video",
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
		[Level.Inline]: "span" as ElementMap,
		[Level.Block]: "div" as ElementMap,
	};
	constructor(properties: Partial<BaseProperties>, private load: T[] = []) {
		super(properties);
		console.log(this.style, this.id);
		Base.createElement(Container.set, this);
	}
	add(...bases: T[]): T[] {
		this.load.push(...bases);
		return [];
	}
}
export class Dataset<T extends Bases> extends Container<T> {}

export class Text extends Base {}
export class Interactor extends Base {}
export class Asset extends Base {}
