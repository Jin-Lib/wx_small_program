//index.js

Page({
  data: {
    selected: true,
    selected1: false,
    hidden: true, //意见反馈提交弹窗
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
  //马上增课按钮
  show: function (e) {
    this.setData({
      hidden: !this.data.hidden
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
