// export const body = document.body;
// export const head = document.head;
// export const title = document.title;
// export enum Elements {
//     Container,
//     Text,
//     Interactor,
//     Dataset,
//     Asset,
// }
export enum Level {
	Inline,
	Block,
}
export enum Assets {
	Video,
	Image,
	Audio,
}
// export class Element {
//     constructor(public type: Elements, public id: string, public tags: string[]) {};
// }

export enum Structure {
	Header,
	Footer,
	Article,
}

export * as Element from './element.js';
console.dir(document.createElement("div"));
