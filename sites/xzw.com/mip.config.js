/**
 * @file mip页面项目配置项
 * @author XM36578
 */
module.exports = {
  dev: {
    /**
     * 启动mip server调试的端口号
     *
     * @type {number}
     */
    port: 8111,
    /**
     * 启用调试页面自动刷新
     *
     * @type {boolean}
     */
    livereload: true,

    /**
     * server 启动自动打开页面，false 为关闭
     *
     * @type {string|boolean}
     */
    autoopen: '/page/mip-example.html'
  }
}
