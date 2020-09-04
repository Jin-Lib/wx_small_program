//index.js

Page({
  data: {
    // 字数限制
    current: 0,
    max: 300,
    hidden: true, //意见反馈提交弹窗
  },
  // 文本框字数限制
  limit: function (e) {
    var value = e.detail.value;
    var length = parseInt(value.length);
    if (length > this.data.noteMaxLen) {
      return;
    }
    this.setData({
      current: length
    });
  },
  //提交按钮
  show: function (e) {
    this.setData({
      hidden: !this.data.hidden
    })
  },
  //完成按钮
  carry: function (e) {
      wx.navigateBack({
        delta: 1
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
