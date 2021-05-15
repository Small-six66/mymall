const Mock = require('mockjs');
const Random = Mock.Random

Mock.mock('/chang/optdata', "get",  {
  "code" :  200 ,
  "optdata": [{
    "category": "recom", 
    "imagelist|4-5": [{
        "image": Random.image('150x280','#e9a7a7','#FFF','WEEK'),
        "ctext":"@word(5,6)",
      }],
    "ctext":"@word(5,6)",
    "cdec":"@ctitle(8, 9)"
   },{
    "category": "pop", 
    "imagelist|4-5": [{
      "image": Random.image('150x280','#c56b9b','#FFF','POP'),
      "ctext":"@word(5,6)",
      }],
    "ctext":"@word(5,6)",
    "cdec":"@ctitle(8, 9)"
    },{
    "category": "small", 
    "imagelist|4-5": [{
      "image": Random.image('150x280','#eb5b5b','#FFF','LIKE'),
      "ctext":"@word(5,6)",
      }],
    "ctext":"@word(5,6)",
    "cdec":"@ctitle(8, 9)"
   }],
   "msg": "success"
})