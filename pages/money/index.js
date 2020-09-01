//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hiddenrule:true,
  },
  showrule: function (e) {
    this.setData({
      hiddenrule: !this.data.hiddenrule
    })
  },
  onLoad: function () {
    
  },
  //点击累计奖学金收益
  income: function (event) {
    wx.navigateTo({
      url: '/pages/user-bonus-income/index'
    })
  },
  //点击提现
  extract: function (event) {
    wx.navigateTo({
      url: '/pages/user-extract/index'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }

  },
})
