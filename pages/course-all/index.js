//index.js

Page({
  data: {
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //点击商品详情
  details: function (event) {
    wx.navigateTo({
      url: '/pages/course-detail/index'
    })
  },
})
