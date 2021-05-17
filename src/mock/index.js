const Mock = require('mockjs');
require('./car/swiperData')
require('./car/proData')
require('./car/guessData')
require('./car/detailData')
require('./chang/optData')
require('./commi/recomData')
require('./profile/ProData')


// 设置所有ajax请求的超时时间，模拟网络传输耗时
Mock.setup({
    timeout:  0 - 3000
})
