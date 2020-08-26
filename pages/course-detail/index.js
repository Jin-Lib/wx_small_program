//index.js

Page({
  data: {
    hiddenrule: true,
    hiddengroup: true,
  },
  showrule: function (e) {
    this.setData({
      hiddenrule: !this.data.hiddenrule
    })
  },
  showgroup: function (e) {
    this.setData({
      hiddengroup: !this.data.hiddengroup
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
