const Mock = require('mockjs');
const Random = Mock.Random

const mycolor = ['#eb3939','#c0586b','#f18ea0','#c56b9b','#eb5b5b','#e9a7a7','#f18238']


Mock.mock('/car/detaildata', "get", {
      "code" :  200 ,
      "topimage|3-5": [{
        "image": Random.image('300x250',Random.pick(mycolor),'#FFF','NewPro')
      }],
      "detail":{
        "title": "@word(5,8)", 
        "titledec": "@ctitle(7, 8)",
        "money": "￥"+"@natural(100,500)",
        "prodec":"@cparagraph"
      },
      "msg": "success"
  })

  