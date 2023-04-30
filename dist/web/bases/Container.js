import Base from "../serealize.js";
export default class Container extends Base {
    load;
    // protected static set = {
    // 	Inline: "span" as keyof HTMLElementTagNameMap,
    // 	Block: "div" as keyof HTMLElementTagNameMap,
    // };
    constructor(properties, load = []) {
        super(properties);
        this.load = load;
    }
    get(key) {
        return this.load.find((v) => v.id == key);
    }
    add(...bases) {
        this.load.push(...bases);
    }
}
