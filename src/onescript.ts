export namespace Web {
    export const body = document.body;
    export const head = document.head;
    export const title = document.title;

    export enum Elements {
        Container,
        Text,
        Interactor,
        Dataset,
        Asset,
    }
    export enum Structure {
        Header,
        Footer,
        Article
    }
}

console.log(document.createElement('div'))