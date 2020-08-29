//index.js

Page({
  data: {
    hiddenposter: true, //海报生成弹窗
    hiddenrecommend: true, //推荐语弹窗
    hiddenrule: true, //服务说明弹窗
    hiddengroup: true,  //拼团规则弹窗
  },
  //服务说明按钮
  showrule: function (e) {
    this.setData({
      hiddenrule: !this.data.hiddenrule
    })
  },
  //拼团规则按钮
  showgroup: function (e) {
    this.setData({
      hiddengroup: !this.data.hiddengroup
    })
  },
  //点击返回首页按钮
  return_index: function (event) {
    wx.navigateTo({
      url: '/pages/mall/index'
    })
  },
  //点击推荐语弹窗
  showrecommend: function (e) {
    this.setData({
      hiddenrecommend: !this.data.hiddenrecommend
    })
  },
  //点击推荐语错号
  showrecommenddj: function (e) {
    this.setData({
      hiddenrecommend: !this.data.hiddenrecommend,
      hiddenposter: !this.data.hiddenposter
    })
  },
  //点击推荐语错号
  showposter: function (e) {
    this.setData({
      hiddenposter: !this.data.hiddenposter
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
