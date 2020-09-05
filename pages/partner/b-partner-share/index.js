//index.js

Page({
  data: {
    hidden: true,
  },
  //点击课程
  share_details: function(event) {
    wx.navigateTo({
      url: '../b-course-details/index'
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
