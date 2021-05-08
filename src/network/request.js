import axios from 'axios'


export function request(config){
  const intancel = axios.create({
    // baseURL: '',
    timeout: 5000
  })
  //axios拦截器
  intancel.interceptors.request.use(config =>{
    return config     //请求成功的拦截
  },err =>{           //请求失败的拦截
    console.log('request err');
  })

  //响应拦截
  intancel.interceptors.response.use(res =>{
    return res.data
  }, err =>{
    console.log('response err');
  })

  return intancel(config)
}