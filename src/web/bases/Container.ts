import Base from "../serealize.js";
import type BaseList from './BaseList.js';
import type {Properties} from './base.js';


export default class Container<T extends BaseList = BaseList> extends Base {
	// protected static set = {
	// 	Inline: "span" as keyof HTMLElementTagNameMap,
	// 	Block: "div" as keyof HTMLElementTagNameMap,
	// };
	constructor(properties: Properties<Container>, private load: T[] = []) {
		super(properties);
	}
	get(key: string): T | undefined {
		return this.load.find((v) => v.id == key);
	}
	add(...bases: T[]): void {
		this.load.push(...bases);
	}
}