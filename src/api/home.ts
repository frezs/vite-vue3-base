import { defHttp } from '@/utils/http'

enum API {
  HOME = '/home'
}

export function getHome(page?: number) {
  if (page) {
    return defHttp.get({ url: API.HOME, params: { page } })
  }
  return defHttp.get({ url: API.HOME })
}