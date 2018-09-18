#!/usr/bin/node

const sig = process.argv[2],
      pig = process.argv[3];

if(process.argv.length !==4 || isNaN(Number(pig))){
  console.error('命令行参数错误！');
  process.exit(1);
}

process.kill(pig,sig);
