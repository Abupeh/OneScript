import Section from "../Section";
import Layout from "../Section/Layout";
import type { StructClasses } from "../Structs/types";
import { InsertionSections } from "./types";

export default class Page extends Section {
  #units: StructClasses[] = [];
  layout = new Layout();

  constructor(public title = "Title", sections: InsertionSections = {}) {
    super(null);
    this.insertIntoSection(sections);
  }

  insertIntoSection(sections: InsertionSections) {
    const sectionUnits = Object.values(sections).flat();
    this.layout.merge(this, sections);
    sectionUnits.map((unit) => unit.$page(this));
    this.#units.push(...sectionUnits);
  }
}
