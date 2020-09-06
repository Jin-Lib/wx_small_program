//index.js

Page({
  data: {
  },

  

  //合伙人任选5门立即购买
  partner_share: function(event) {
    wx.navigateTo({
      url: '/pages/partner/b-partner-share/index'
    })
  },
  //课程详情
  course_details: function (event) {
    wx.navigateTo({
      url: '/pages/partner/b-details/index'
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
