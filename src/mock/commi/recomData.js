const Mock = require('mockjs');
const Random = Mock.Random

const mycolor = ['#eb3939','#c0586b','#f18ea0','#c56b9b','#eb5b5b','#e9a7a7','#f18238']

Mock.mock('/commi/recomdata', "get",  {
  "code" :  200 ,
  "data": [{
    "category": "recom", 
    "datalist|14": [{
        "image": Random.image('150x160','#e9a7a7','#FFF','HeiHei'),
        "userimg": Random.image('30x30','#c0586b','#FFF','U'),
        "text":"@word(8,15)",
        "name":"@ctitle(3, 4)",
        "address":"@ctitle(5, 8)",
        "amount": "@natural(0,500)"
      }],
   },{
    "category": "point", 
    "datalist|14": [{
        "image": Random.image('150x160','#eb5b5b','#FFF','HaHa'),
        "userimg": Random.image('30x30','#c0586b','#FFF','U'),
        "text":"@word(8,15)",
        "name":"@ctitle(3, 4)",
        "address":"@ctitle(5, 8)",
        "amount": "@natural(0,500)"
      }],
    },{
      "category": "vlog", 
      "datalist|14": [{
          "image": Random.image('150x160','#f18238','#FFF','VOLG'),
          "text":"@word(8,15)",
          "name":"@ctitle(3, 4)",
          "address":"@ctitle(5, 8)",
          "amount": "@natural(0,500)"
        }]
   }],
   "msg": "success"
})