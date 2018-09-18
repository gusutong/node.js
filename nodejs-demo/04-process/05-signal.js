#!/usr/bin/node

const log = console.log;

log('process id:',process.pig);

process.on('SIGINT',() => {
  log('your press ctrl-c,good bye');
  process.exit();
});

process.on('SIGTSTP',() => {
  log('you press ctrl-z, stop running');
  process.exit();
});
