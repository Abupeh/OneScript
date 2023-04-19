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
export var Level;
(function (Level) {
    Level[Level["Inline"] = 0] = "Inline";
    Level[Level["Block"] = 1] = "Block";
})(Level || (Level = {}));
export var Assets;
(function (Assets) {
    Assets[Assets["Video"] = 0] = "Video";
    Assets[Assets["Image"] = 1] = "Image";
    Assets[Assets["Audio"] = 2] = "Audio";
})(Assets || (Assets = {}));
// export class Element {
//     constructor(public type: Elements, public id: string, public tags: string[]) {};
// }
export var Structure;
(function (Structure) {
    Structure[Structure["Header"] = 0] = "Header";
    Structure[Structure["Footer"] = 1] = "Footer";
    Structure[Structure["Article"] = 2] = "Article";
})(Structure || (Structure = {}));
export * as Element from './element.js';
console.dir(document.createElement("div"));
