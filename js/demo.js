import { firstName } from './test.js';
console.log(firstName); // 'Michael'
import * as test from './test.js';
console.log(test); //Module{}   所有内容
import { firstName as key, lastName as value } from './test.js';
console.log(key + '--' + value); // Michael--Jackson
