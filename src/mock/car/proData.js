const Mock = require('mockjs');
const Random = Mock.Random

const mycolor = ['#eb3939','#c0586b','#f18ea0','#c56b9b','#eb5b5b','#e9a7a7','#f18238']


Mock.mock('/car/prodata', "get", {
      "code" :  200 ,
      "newdata": [{
        "title": "@csentence", 
        "money": "￥"+"@natural(100,500)",
        "image": Random.image('120x110',Random.pick(mycolor),'#FFF','NewPro')
      },{
        "title": "@csentence", 
        "money": "￥"+"@natural(100,500)",
        "image": Random.image('120x110',Random.pick(mycolor),'#FFF','NewPro')
      },{
          "title": "@csentence", 
          "money": "￥"+"@natural(100,500)",
          "image": Random.image('120x110',Random.pick(mycolor),'#FFF','NewPro')
      },{
          "title": "@csentence", 
          "money": "￥"+"@natural(100,500)",
          "image": Random.image('120x110',Random.pick(mycolor),'#FFF','NewPro')
      }],
      "msg": "success"
  })

  