//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //点击轮播图
  carousel: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击排行榜
  leaderboard: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击大语文
  chinese: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击天文地理
  geography: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击名师专区
  teacher: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击全部课程
  allcourses: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击限时爆款更多
  more: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击商品详情
  details: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  onLoad: function () {
    
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

  },
})
