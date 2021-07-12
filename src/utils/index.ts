import { isObject } from 'lodash-es'

export function objectDeepMerge<T = any>(src: any = {}, target: any = {}): T {
  let key: string;
  for (key in target) {
    src[key] = isObject(src[key]) ? objectDeepMerge(src[key], target[key]) : (src[key] = target[key]);
  }
  return src;
}