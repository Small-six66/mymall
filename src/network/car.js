import {request} from './request'

export function getCarData(){
  return request({
    url:'/car/swiperdata'
  })
}

export function getCarProData(){
  return request({
    url:'/car/prodata'
  })
}

export function getCarGuessData(){
  return request({
    url:'/car/guessdata',
    // params: {   //传递参数
    //   page
    // }
  })
}

export function getCarDetailData(){
  return request({
    url:'/car/detaildata'
  })
}

