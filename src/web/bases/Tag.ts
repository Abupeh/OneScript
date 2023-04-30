import type BaseList from "./BaseList.js";

export default class Tag<T extends BaseList> extends Array<T> {
	constructor(public name: string, ...bases: T[]) {
		super(...bases);
	}
	replace(base: T, value: T): boolean {
		const index = this.indexOf(base);
		return index == -1 ? ((this[index] = value), true) : false;
	}
}
