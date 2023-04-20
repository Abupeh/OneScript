import * as Web from "./web/web.js";
import * as Base from "./web/base.js";
console.dir(document.createElement("div"));
const a = new Base.Container({ id: "Element1", level: Base.Level.Inline });
const page = new Web.Page("Onescript");
console.log(Web);
console.log('page', page);
console.log(a);
