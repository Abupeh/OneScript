class Base {
    element;
    static set;
    static createElement(set, base) {
        const element = document.createElement(set[base.level]);
        element.id = base.id;
        Object.keys(base.style).forEach((key) => console.log(key));
        return element;
    }
    id = "";
    level = Level.Inline;
    tags = [];
    style = {};
    event = [];
    constructor(properties) {
        Object.assign(this, properties);
    }
    editStyle(styles) {
        Object.assign(this.style, styles);
    }
}
class Tag extends Array {
    name;
    constructor(name, ...bases) {
        super(...bases);
        this.name = name;
    }
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
        [Level.Inline]: "span",
        [Level.Block]: "div",
    };
    constructor(properties, load = []) {
        super(properties);
        this.load = load;
        console.log(this.style, this.id);
        Base.createElement(Container.set, this);
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
