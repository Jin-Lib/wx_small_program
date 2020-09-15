//index.js

Page({
  data: {
  },

  //团队高级合伙人
  teamseniorpartner: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-community-teamseniorpartner/index'
    })
  },

  //团队初级合伙人
  juniorpartneroftheteam: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-community-juniorpartneroftheteam/index'
    })
  },

  //团队当前粉丝
  currentfansoftheteam: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-community-currentfansoftheteam/index'
    })
  },

  //社群高级合伙人
  seniorcommunitypartner: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-community-seniorcommunitypartner/index'
    })
  },

  //社群初级合伙人
  communityjuniorpartner: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-community-communityjuniorpartner/index'
    })
  },

  //社群当前粉丝
  currentfansofthecommunity: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-community-currentfansofthecommunity/index'
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
