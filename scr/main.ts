import { readFileSync, writeFileSync } from "fs";
import { generate } from "./generate";

const MAIN_FILE = process.argv[2];
const RESULTS_FILE = process.argv[3];
const OneScriptCode = readFileSync(MAIN_FILE, "utf-8").replaceAll('\r', '');
const mainResults = generate(OneScriptCode, true);
writeFileSync(RESULTS_FILE, mainResults);
