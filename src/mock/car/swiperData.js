const Mock = require('mockjs');
const Random = Mock.Random

const mycolor = ['#ff5777','#c0586b','#f18ea0','#c56b9b','#eb5b5b']
const mytext = ['HELLO','New','Products','Young']

Mock.mock('/car/swiperdata', "get",  {
      "code" :  200 ,
      "data": [{
        "title": "@CNAME", // 随机生成中文
        "link": "@url",
        "image": Random.image('320x180',Random.pick(mycolor),'#FFF',Random.pick(mytext))
      },{
        "title": "@CNAME", // 随机生成中文
        "link": "@url",
        "image": Random.image('320x180',Random.pick(mycolor),'#FFF',Random.pick(mytext))
      },{
        "title": "@CNAME", // 随机生成中文
        "link": "@url",
        "image": Random.image('320x180',Random.pick(mycolor),'#FFF',Random.pick(mytext))
      },{
        "title": "@CNAME", // 随机生成中文
        "link": "@url",
        "image": Random.image('320x180',Random.pick(mycolor),'#FFF',Random.pick(mytext))
      }],
      "msg": "success"
  })

  