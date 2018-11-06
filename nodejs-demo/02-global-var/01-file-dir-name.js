#!/usr/bin/node

console.log('file name:',__filename);
console.log('dir name:',__dirname);

/*在文件操作的时候，可以进行目录的拼接，可以用一个文件的绝对路径和相对路径从而得到一个文件的绝对路径*/

/*method1*/
var fileName = __dirname + '/views/view.html';

/*method2*/
switch(process.platform){
  case 'Linux':
    fileName = __dirname + '/views/view.html';
    break;
  case 'win32':
    fileName = __dirname + '\\view\\view.html';
    break;
  default:
    fileName= 'somrthing wrong';
}
console.log('fileName:',fileName);
/*mothod3*/
const path = require('path');
fileName = path.join(__dirname, 'views','login.html');
console.log('fileName:',fileName);
fileName = path.join(__dirname,'view','base.html');
