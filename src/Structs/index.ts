import type Container from "./Components/Container";

import Page from "../Page";
import { Trigger } from "../Triggers";
import type { StructClasses, StructComponents, Structs } from "./types";
import Insertion from "./Insertion";

export default abstract class Struct extends Insertion {
  protected readonly containers: Container<StructClasses>[] = [];
  get _containers(): readonly Container<StructClasses>[] {
    return this.containers;
  }
  constructor(protected _page?: Page | null) {
    super(_page);
  }
  get page() {
    return this._page;
  }
}

export class Input extends Struct {}
export class Asset extends Struct {}
