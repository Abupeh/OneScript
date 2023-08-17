import Section from ".";
import { type Page } from "..";
import { InsertionSections } from "../Page/types";

export default class Layout {
  Header = new Section(null);
  Nav = new Section(null);
  Main = new Section(null);
  Article = new Section(null);
  Aside = new Section(null);
  Footer = new Section(null);
  merge(page: Page | null, sections: InsertionSections) {
    for (const key in sections) {
      const sectionName = key as keyof InsertionSections;
      this[sectionName].$page(page);
      const structs = sections[sectionName];
      if (!structs) continue;
      this[sectionName].insert(...[structs].flat());
    }
  }
}
