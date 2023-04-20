class Base {
    element;
    static set;
    id = "";
    level = Level.Inline;
    tags = [];
    style = {};
    event = [];
    constructor({}) { }
    editStyle(styles) {
        Object.assign(this.style, styles);
    }
}
class Tag extends Array {
    replace(base, value) {
        const index = this.indexOf(base);
        return index == -1 ? ((this[index] = value), true) : false;
    }
}
export var Level;
(function (Level) {
    Level["Inline"] = "Inline";
    Level["Block"] = "Block";
})(Level || (Level = {}));
export var Assets;
(function (Assets) {
    Assets["Video"] = "Video";
    Assets["Image"] = "Image";
    Assets["Audio"] = "Audio";
})(Assets || (Assets = {}));
class Container extends Base {
    load;
    static set = {
        [Level.Inline]: "div",
        [Level.Block]: "span"
    };
    constructor(properties, load = []) {
        super(properties);
        this.load = load;
        this.element = document.createElement(Container.set[this.level]);
    }
    add(...bases) {
        this.load.push(...bases);
        return [];
    }
}
export { Container };
export class Dataset extends Container {
}
export class Text extends Base {
}
export class Interactor extends Base {
}
export class Asset extends Base {
}
