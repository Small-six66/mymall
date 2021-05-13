const Mock = require('mockjs');
const Random = Mock.Random

const mycolor = ['#eb3939','#c0586b','#f18ea0','#c56b9b','#eb5b5b','#e9a7a7','#f18238']

Mock.mock('/car/guessdata', "get",  {
  "code" :  200 ,
  "guessdata|10": [{
    "title": "@title(4, 6)", 
    "money": "￥"+"@natural(100,500)",
    "image": Random.image('85x85',Random.pick(mycolor),'#FFF','guess')
   }],
   "msg": "success"
})

  