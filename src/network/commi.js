import {request} from './request'

export function getComalldata(){
  return request({
    url:'/commi/recomdata'
  })
}