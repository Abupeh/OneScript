import Web, { AText, Asset, Input, Page } from ".";
import Section from "./Section";


console.dir(document);
console.log(window);
console.log(screen);

const text = new AText(null, 'Hello!');
const asset = new Asset();
// const container = new Container();
// container.insert(text);
// asset.$(container);
// console.log(container)

const main = new Page("Hi", {
    Main: new AText(null, 'sup')
});


main.insertIntoSection({
    Nav: text
})

main.remove(text);

console.log(main)
// const a = new Container(main, new Input());
// console.log(a.insert(new AText()), a)
