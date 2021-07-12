module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      overrideBrowserslist: [
        "Android 4.1",
        "iOS 7.1",
        "Chrome > 31",
        "ff > 31",
        "ie >= 8",
        "last 10 versions", // 所有主流浏览器最近10版本用
      ],
      grid: true,
    },
    "postcss-pxtorem": {
      // Vant 官方根字体大小是 37.5
      rootValue: 37.5,
      //是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
      propList: ['*'],
      // 过滤掉.norem-开头的class，不进行rem转换
      selectorBlackList: ['.norem'],
      unitPrecision: 5, //保留rem小数点多少位
      mediaQuery: false, // 媒体查询( @media screen 之类的)中不生效
      minPixelValue: 12, // px小于12的不会被转换
    }
  },
};
