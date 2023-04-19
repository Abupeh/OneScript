class Element {
    id;
    tags;
    constructor(id, tags) {
        this.id = id;
        this.tags = tags;
    }
}
export class Container extends Element {
}
export class Text extends Element {
}
export class Interactor extends Element {
}
export class Dataset extends Element {
}
export class Asset extends Element {
}
