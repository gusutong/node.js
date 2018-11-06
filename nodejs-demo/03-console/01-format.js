#!/usr/bin/node

const user = {
  name:'gusutong',
  age:20,
  qq:'562656798'
};

const log = console.log;

//method1

log('name: %s',user.name);
log('age: %d',user.age);
log('user: %j',user);

//method2

log('qq:' + user.qq);

//method3

log(`qq: ${user.qq}`);
