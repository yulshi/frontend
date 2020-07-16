module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'jscommon': '@/common ',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}
