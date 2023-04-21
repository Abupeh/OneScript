const idList = [];
class Base {
    element;
    static set;
    static createElement(set, base) {
        const element = document.createElement(set[base.level]);
        element.id = base.id;
        const styles = Object.entries(base.style);
        styles.forEach(([key, value]) => element.style.setProperty(key, value));
        return element;
    }
    #id = "";
    set id(id) {
        this.#id = id;
    }
    get id() {
        return this.#id;
    }
    level = Level.Inline;
    tags = [];
    style = {};
    event = [];
    data = {};
    constructor(properties) {
        Object.assign(this, properties);
        if (idList.includes(this.id))
            throw new Error("ID must be unique.");
        idList.push(this.id);
    }
    editStyle(styles) {
        Object.assign(this.style, styles);
    }
}
//* Global: Class (Tag), Data (object of any), id
//: Interator: AccessKey, Draggable
//? Text: contenteditable, dir
//* Container: 
//: Dataset: 
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
        Base.createElement(Container.set, this);
    }
    get(key) {
        return this.load.find((v) => v.id == key);
    }
    add(...bases) {
        this.load.push(...bases);
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
