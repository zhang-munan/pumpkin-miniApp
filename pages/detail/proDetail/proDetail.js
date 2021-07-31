const app = getApp()
app.globalData.gdx.createApp({
  data: {
    identity: wx.getStorageSync("isAdmin"),
  },

  /**
   * 页面出现在前台时执行
   */
  show() {},

  /**
   * 页面创建时执行
   */
  load () {},

})