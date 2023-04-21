import * as Web from "./web/web.js";
import * as Base from "./web/base.js";

console.dir(document.createElement("div"));
const Greeting = new Base.Container({
	id: "Greetings",
	level: Base.Level.Block,
	style: { "color": "red" },
}, [
    new Base.Text({
        id: "hello",
        data: { test: "a" }
    })
]);

const page = new Web.Page("Onescript");
console.log(Web);
console.log("page", page);
console.log(Greeting);
