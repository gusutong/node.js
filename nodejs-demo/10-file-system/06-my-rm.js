#!/usr/bin/node

const fs = require('fs'),
      join = require('path').join,
      src =  process.argv[2];

if(typeof(src) === 'undefined'){
  console.error('请指定要删除的文件名或者目录名！');
  process.exit(1);
}

if(fs)
