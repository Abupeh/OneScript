import type { Structs } from "./types";
import { Container, type Page, Trigger } from "..";
import type { StructComponents } from "./types";
import Section from "../Section";

export default abstract class Insertion {
  constructor(protected _page?: Page | null) {}
  $page(page: Page | null) {
    this._page = page;
    return page;
  }
  $(entries: StructComponents): Structs | Structs[] {
    if (entries instanceof Container) return entries.insert(this as any);
    if (entries instanceof Trigger) return entries;
    if (entries instanceof Section) return this.$page(entries.page);
    return entries;
  }
}
