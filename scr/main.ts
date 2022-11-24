import { readFileSync, writeFileSync } from 'fs';
import { generate } from './generate';

const MAIN_FILE = process.argv[2];
const RESULTS_FILE = process.argv[3];
const OneScriptCode = readFileSync(MAIN_FILE, 'utf-8')
const mainResults = generate(OneScriptCode);
writeFileSync(RESULTS_FILE, mainResults);
