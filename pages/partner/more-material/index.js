//index.js

Page({
  data: {
    hiddenkg: true,//新老用户免拼规则弹窗
  },
  //新老用户免拼规则按钮
  showkg: function (e) {
    this.setData({
      hiddenkg: !this.data.hiddenkg
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
