import type { default as Section } from ".";
import type { StructClasses } from "../Structs/types";

type SectionType = "Header" | "Nav" | "Main" | "Article" | "Aside" | "Footer";
type Sections = {
  [k in SectionType]?: Section;
};

type InsertionSections = {
  [k in SectionType]?: StructClasses[] | StructClasses;
};
