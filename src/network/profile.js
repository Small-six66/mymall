import {request} from './request'

export function getProdata(){
  return request({
    url:'/profile/prodata'
  })
}