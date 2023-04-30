var Meta;
(function (Meta) {
    Meta["Policy"] = "Policy";
    Meta["Encoding"] = "Encoding";
    Meta["PerferredSheet"] = "PerferredSheet";
    Meta["RefreshTime"] = "RefreshTime";
})(Meta || (Meta = {}));
class Info {
    charset = "UTF-8";
    content = {};
    http = {};
    constructor(properties = {}) {
        Object.assign(this, properties);
    }
}
class Page {
    bases = [];
    static activate(page) {
        this.currentPage = page;
    }
    static currentPage = null;
    get scripts() {
        return this.#scripts;
    }
    #scripts = [];
    styles = {};
    info = new Info({});
    #title;
    get title() {
        return this.#title;
    }
    set title(value) {
        this.title = value;
        document.title = value;
    }
    constructor(title, properties = {}) {
        this.#title = title;
        Object.assign(this, properties);
    }
    addScripts(...scripts) {
        this.scripts.push(...scripts);
    }
    append(...bases) {
        this.bases.push(...bases);
    }
}
export default Page;
