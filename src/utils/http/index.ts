import type { CreateAxiosConfig, AxiosTransform } from './aixos'
import type { CustomResqusetOptions } from '#/axios'

import { Aixos } from './aixos'
import { objectDeepMerge } from '@/utils'


const transform: AxiosTransform = {

  beforeRequestHook(config, options) {
    // 请求之前钩子函数
    console.log('1、请求之前钩子函数: transformResponseHook')
    return config
  },
  transformResponseHook(res, options) {
    // 响应拦截后钩子函数
    console.log('4、响应拦截后钩子函数: transformResponseHook')
    return res
  },
  requestInterceptor(config, options) {
    // 请求拦截
    console.log('2、请求拦截: requestInterceptor')
    return config
  },
  resqonseInterceptors(res) {
    // 响应拦截
    console.log('3、响应拦截: resqonseInterceptors')
    return res
  },
}

export const customDefaultOptins: CustomResqusetOptions | CreateAxiosConfig = {
  transform,
  joinTime: true
}

export function createAxios(opt?: CreateAxiosConfig) {
  return new Aixos(objectDeepMerge(customDefaultOptins, opt || {}))
}

export const defHttp = createAxios({})