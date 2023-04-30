import Container from "./Container.js";
import type BaseList from "./BaseList.js";

export default class Dataset<T extends BaseList> extends Container<T> {}
