//index.js

Page({
  data: {
    selected: true,
    selected1: false,
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
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})
