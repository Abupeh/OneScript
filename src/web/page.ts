import BaseList from "./bases/BaseList.js";
import * as Base from "./bases/base.js";

enum Meta {
	Policy = "Policy",
	Encoding = "Encoding",
	PerferredSheet = "PerferredSheet",
	RefreshTime = "RefreshTime",
}

class Info {
	charset: string = "UTF-8";
	content: {
		[k: string]: string;
	} = {};
	http: {
		[k in Meta]?: string;
	} = {};
	constructor(properties: Base.Properties<Info> = {}) {
		Object.assign(this, properties);
	}
}

export default class Page {
	private bases: BaseList[] = [];
	static activate(page: Page): void {
		this.currentPage = page;
	}
	private static currentPage: Page | null = null;

	get scripts(): string[] {
		return this.#scripts;
	}
	#scripts: string[] = [];
	styles: Base.BaseStyles = {};
	info = new Info({});
	#title;
	get title(): string {
		return this.#title;
	}
	set title(value: string) {
		this.title = value;
		document.title = value;
	}

	constructor(title: string, properties: Base.Properties<Page> = {}) {
		this.#title = title;
		Object.assign(this, properties);
	}
	addScripts(...scripts: string[]) {
		this.scripts.push(...scripts);
	}
	append(...bases: BaseList[]) {
		this.bases.push(...bases);
	}
}
