//index.js

Page({
  data: {
    hiddenrule: true, //规则说明弹窗
    hiddenshare: true, //分享弹窗
    selected: true,
    selected1: false,
  },
  //分享出去别人看到的页面临时入口
  hhsr: function (event) {
    wx.navigateTo({
      url: '/pages/partner/b-user-lockpowder/index'
    })
  },
  
  //规则说明按钮
  showrule: function (e) {
    this.setData({
      hiddenrule: !this.data.hiddenrule
    })
  },
  //分享按钮
  showshare: function (e) {
    this.setData({
      hiddenshare: !this.data.hiddenshare
    })
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true,
    });
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
    });
  },
  
  //点击立即去推广
  tuiguang: function(event) {
    wx.navigateTo({
      url: '../partner-mall/index'
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
