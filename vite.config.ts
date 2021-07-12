import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import viteCompression from 'vite-plugin-compression'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      ignore: /^\_/,
      mockPath: 'mock',
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '#': resolve(__dirname, './types')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [
        // require('postcss-pxtorem')({ // 把px单位换算成rem单位
        //   rootValue: 100, // 换算基数，默认100，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
        //   unitPrecision: 5, // 允许REM单位增长到的十进制数字,小数点后保留的位数。
        //   propList: ['*', '!font-size'], // 属性选择器，*表示通用，!font-size表示禁用字体转换
        //   exclude: /(node_module)/,  // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法
        //   selectorBlackList: ['.radius'], //要忽略并保留为px的选择器
        //   mediaQuery: false,  //（布尔值）允许在媒体查询中转换px。
        //   minPixelValue: 5 //设置要替换的最小像素值(3px会被转rem)。 默认 0
        // })
      ]
    }
  }
})
