export type BaseStyles = {
	[key in keyof CSSStyleDeclaration as key extends keyof string
		? never
		: key]?: CSSStyleDeclaration[key];
};

export type Properties<T> = {
	[k in keyof T as T[k] extends Function ? never : k]?: T[k];
};

import Tag from "./Tag.js";
import type BaseList from './BaseList.js';

export type Levels = "Inline" | "InlineBlock" | "Block" | "none";

export abstract class Base {
	static idList: string[] = [];
	protected element!: HTMLElement;


	readonly id: string = "";
	
	get level() {
		return (this.style.display || "none") as Levels;
	}

	
	tags: Tag<BaseList>[] = [];
	get style(): BaseStyles {
		return this.element.style;
	}
	event: Interactor[] = [];
	data: { [k: string]: unknown } = {};
	constructor(properties: Properties<Base>) {
		Object.assign(this, properties);
		if (Base.idList.includes(this.id)) {
			this.id = "";
			throw new Error("ID must be unique.");
		}
		Base.idList.push(this.id);
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


export enum Assets {
	Video = "Video",
	Image = "Image",
	Audio = "Audio",
}


export class Text extends Base {}
export class Interactor extends Base {}
export class Asset extends Base {}
export { default as Container } from "./Container.js";
