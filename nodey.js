//package.json -manifest file(stores important info about project.package)
// manual approach (create package.json in the root,create properties etc)
// npm init (step by step,press enter to skip)
// npm init -y (everything default)
// external dependencies are required to be installed
// for eg bootstrap is installed using npm i bootstrap
const _=require('lodash');
const items=[1,[2,[3,[4]]]];
const newItems=_.flattenDeep(items);
console.log(newItems);// [1,2,3,4]