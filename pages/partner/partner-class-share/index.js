//index.js

Page({
  data: {
    hidden: true,
  },

  //--分享出去，别人看到的页面--
  hhsr: function (event) {
    wx.navigateTo({
      url: '/pages/partner/b-partner-class-share/index'
    })
  },
  //海报弹窗
  show: function (e) {
    this.setData({
      hidden: !this.data.hidden
    })
  },
  

  //合伙人任选5门
  partner_share: function(event) {
    wx.navigateTo({
      url: '/pages/partner/partner-share/index'
    })
  },
  //课程分享详情
  course_details: function (event) {
    wx.navigateTo({
      url: '/pages/partner/share-details/index'
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
