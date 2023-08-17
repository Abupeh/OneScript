import Struct from "..";
import type { Page } from "../..";

export default class AText extends Struct {
  constructor(page?: Page | null, public content?: string) {
    super(page);
  }
}
