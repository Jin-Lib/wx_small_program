//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //点击修改信息
  information: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击学分
  credit: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击优惠券
  coupon: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击积分商城
  mall: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击问答挑战
  challenge: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击专属特权
  privilege: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击我的订单
  order: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击意见反馈
  feedback: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击咨询客服
  advisory: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  onLoad: function () {},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }

  },
})
