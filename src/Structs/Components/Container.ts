import Struct from "..";

import Page from "../../Page";
import type { StructClasses } from "../types";

export default class Container<T extends StructClasses> extends Struct {
  readonly #units: T[];
  get units(): readonly T[] {
    return this.#units;
  }

  constructor(page?: Page | null, ...units: T[]) {
    super(page);
    this.#units = units;
  }

  insert(...units: T[]) {
    this.#units.push(...units);
    units.forEach((unit) => (unit as Container<T>).containers.push(this));
    return units;
  }
}
