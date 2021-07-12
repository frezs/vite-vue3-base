import { MockMethod } from 'vite-plugin-mock'
import Mock from 'mockjs'

export default [
  {
    url: '/home',
    method: 'get',
    response: () => {
      return Mock.mock({
        code: 20000,
        msg: 'success',
        'data': ['Hello Mock'],
      })
    },
  },
] as MockMethod[]
