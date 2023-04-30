export default class Tag extends Array {
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
