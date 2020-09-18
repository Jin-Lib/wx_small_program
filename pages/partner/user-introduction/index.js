//index.js

Page({
  data: {
    hiddenrule: true, //规则说明弹窗
    hiddenshare: true, //分享弹窗
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
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})
