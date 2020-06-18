/// <reference path="./components/project-list.ts"/>
/// <reference path="./components/project-input.ts"/>
import { ProjectInput } from './components/project-input.js';
import { ProjectList } from './components/project-list.js';

new ProjectInput();
new ProjectList('active');
const finishedPrjList = new ProjectList('finished');
