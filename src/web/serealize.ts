import { Base, type BaseStyles, type Levels } from "./bases/base.js";
export default class SerealizedBase extends Base {
	set style(style: BaseStyles) {
		const styles = Object.entries(style);
		styles.forEach(([key, value]) => this.element.style.setProperty(key, value as keyof BaseStyles));
	}
	set level(value: Levels) {
		this.style.display = value;
	}
}
