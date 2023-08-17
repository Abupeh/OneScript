import type { default as Container } from "./Components/Container";
import type { default as AText } from "./Components/AText";
import type { Input, Asset } from ".";
import type { default as Tag } from "../Tags";
import type { Trigger } from "../Triggers";
import type Section from "../Section";
import type Page from "../Page/index";

type StructClasses = Container<StructClasses> | AText | Input | Asset;
type StructComponents = Container<StructClasses> | Trigger | Tag;
type StructHolders = (Page | null) | Section;
type Structs = StructClasses | StructComponents | StructHolders;
