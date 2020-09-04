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
  //点击去上课
  gotoclass: function (event) {
    wx.navigateTo({
      url: '/pages/course-play/index'
    })
  },
  //0元领地图火活动按钮
  activity: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //返回首页按钮
  return_index: function (event) {
    wx.navigateTo({
      url: '/pages/mall/index'
    })
  },
})
