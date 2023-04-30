import { Base } from "./bases/base.js";
export default class SerealizedBase extends Base {
    set style(style) {
        const styles = Object.entries(style);
        styles.forEach(([key, value]) => this.element.style.setProperty(key, value));
    }
    set level(value) {
        this.style.display = value;
    }
}
