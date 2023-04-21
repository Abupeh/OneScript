type BaseStyles = {
	[key in keyof CSSStyleDeclaration as key extends keyof string
		? never
		: key]?: CSSStyleDeclaration[key];
};

type Properties<T> = {
	[k in keyof T as T[k] extends Function ? never : k]?: T[k];
};

type BaseEdits = { [key in Level | Assets]?: ElementMap };
type ElementMap = keyof HTMLElementTagNameMap;
const idList: string[] = [];

abstract class Base {
	protected element!: HTMLElement;
	protected static set: BaseEdits;
	protected static createElement(
		set: typeof Base.set,
		base: Bases
	): HTMLElement {
		const element = document.createElement(set[base.level] as ElementMap);
		element.id = base.id;
		const styles = Object.entries(base.style) as [keyof BaseStyles, string][];
		styles.forEach(([key, value]) => element.style.setProperty(key, value));

		return element;
	}
	#id: string = "";
	private set id(id: string) {
		this.#id = id;
	}
	get id() {
		return this.#id;
	}
	level = Level.Inline;
	tags: Tag<Bases>[] = [];
	style: BaseStyles = {};
	event: Interactor[] = [];
	data: { [k: string]: unknown } = {};
	constructor(properties: Properties<Base>) {
		Object.assign(this, properties);
		if (idList.includes(this.id)) throw new Error("ID must be unique.");
		idList.push(this.id);
	}
	editStyle(styles: BaseStyles) {
		Object.assign(this.style, styles);
	}
}
//* Global: Class (Tag), Data (object of any), id, style, title
//: Interator: AccessKey, Draggable, tab order
//? Text: contenteditable, dir, lang, spellcheck, translate
//* Container: 
//: Dataset: 

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
	constructor(properties: Properties<Container>, private load: T[] = []) {
		super(properties);
		Base.createElement(Container.set, this);
	}
	get(key: string): T | undefined {
		return this.load.find((v) => v.id == key);
	}
	add(...bases: T[]): void {
		this.load.push(...bases);
	}
}
export class Dataset<T extends Bases> extends Container<T> {}

export class Text extends Base {}
export class Interactor extends Base {}
export class Asset extends Base {}
