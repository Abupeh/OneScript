import * as Web from "./web/web.js";

const Greeting = new Web.Container(
	{
		id: "Greetings",
		level: "Block",
		style: { color: "red" },
	},
	[
		new Web.Text({
			id: "hello",
			data: { test: "a" },
		}),
	]
);

const page = new Web.Page("Onescript");
Web.Page.activate(page);
page.append(Greeting);

console.dir(document.createElement("div"));
console.log(Web);
console.log("page", page);
console.log(Greeting);
