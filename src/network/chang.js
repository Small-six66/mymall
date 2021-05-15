import {request} from './request'

export function getchangOptdata(){
  return request({
    url:'/chang/optdata'
  })
}