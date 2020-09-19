//index.js

Page({
  data: {
    hiddenrule: true,
  },
  //0元领取按钮
  showgroup: function (e) {
    this.setData({
      hiddenrule: !this.data.hiddenrule
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
