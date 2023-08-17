import type { Page } from "..";
import type { StructClasses } from "../Structs/types";

class Section {
  #units: StructClasses[] = [];

  get units(): readonly StructClasses[] {
    return this.#units;
  }
  constructor(private page: Page | null, ...units: StructClasses[]) {
    this.insert(...units);
  }
  $page(page: Page | null) {
    this.page = page;
    return page;
  }
  insert(...units: StructClasses[]) {
    this.#units.push(...units);
    units.forEach((unit) => unit.$(this));
  }
  remove(struct: StructClasses) {
    this.#units.splice(this.#units.indexOf(struct), 1);
  }
}

export default Section;
