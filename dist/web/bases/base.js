class Base {
    static idList = [];
    element;
    id = "";
    get level() {
        return (this.style.display || "none");
    }
    tags = [];
    get style() {
        return this.element.style;
    }
    event = [];
    data = {};
    constructor(properties) {
        Object.assign(this, properties);
        if (Base.idList.includes(this.id)) {
            this.id = "";
            throw new Error("ID must be unique.");
        }
        Base.idList.push(this.id);
    }
    editStyle(styles) {
        Object.assign(this.style, styles);
    }
}
export { Base };
//* Global: Class (Tag), Data (object of any), id, style, title
//: Interator: AccessKey, Draggable, tab order
//? Text: contenteditable, dir, lang, spellcheck, translate
//* Container:
//: Dataset:
export var Assets;
(function (Assets) {
    Assets["Video"] = "Video";
    Assets["Image"] = "Image";
    Assets["Audio"] = "Audio";
})(Assets || (Assets = {}));
export class Text extends Base {
}
export class Interactor extends Base {
}
export class Asset extends Base {
}
export { default as Container } from "./Container.js";
