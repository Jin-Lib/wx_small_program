//index.js

Page({
  data: {
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
      url: '/pages/partner/course-details/index'
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
