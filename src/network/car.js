import {request} from './request'

export function getCarData(){
  return request({
    url:'/car/swiperdata'
  })
}

export function getCarProData(){
  return request({
    url:'/car/prodata',
    // params: {   //传递参数

    // }
  })
}