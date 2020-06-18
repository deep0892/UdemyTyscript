/// <reference path="./components/project-list.ts"/>
/// <reference path="./components/project-input.ts"/>

namespace App {
  new ProjectInput();
  new ProjectList('active');
  const finishedPrjList = new ProjectList('finished');
}