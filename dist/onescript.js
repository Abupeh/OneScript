export var Web;
(function (Web) {
    Web.body = document.body;
    Web.head = document.head;
    Web.title = document.title;
    let Elements;
    (function (Elements) {
        Elements[Elements["Container"] = 0] = "Container";
        Elements[Elements["Text"] = 1] = "Text";
        Elements[Elements["Interactor"] = 2] = "Interactor";
        Elements[Elements["Dataset"] = 3] = "Dataset";
        Elements[Elements["Asset"] = 4] = "Asset";
    })(Elements = Web.Elements || (Web.Elements = {}));
    let Structure;
    (function (Structure) {
        Structure[Structure["Header"] = 0] = "Header";
        Structure[Structure["Footer"] = 1] = "Footer";
        Structure[Structure["Article"] = 2] = "Article";
    })(Structure = Web.Structure || (Web.Structure = {}));
})(Web || (Web = {}));
console.log(document.createElement('div'));
