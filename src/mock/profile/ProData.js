const Mock = require('mockjs');
const Random = Mock.Random

const mycolor = ['#eb3939','#c0586b','#f18ea0','#c56b9b','#eb5b5b','#e9a7a7','#f18238']

Mock.mock('/profile/prodata', "get",  {
  "code" :  200 ,
  "data": {
    "username": "@ctitle(3, 4)",
    "text": "@ctitle(8, 10)",
    "point": "@natural(0,500)",
    "fans": "@natural(0,500)",
   },
   "msg": "success"
})