//index.js

Page({
  data: {
    hidden: true,
  },

  //--分享出去，别人看到的页面--
  hhsr: function (event) {
    wx.navigateTo({
      url: '/pages/partner/b-partner-share/index'
    })
  },
  //课程详情
  share_details: function (event) {
    wx.navigateTo({
      url: '/pages/partner/details/index'
    })
  },
  //海报弹窗
  show: function (e) {
    this.setData({
      hidden: !this.data.hidden
    })
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})
