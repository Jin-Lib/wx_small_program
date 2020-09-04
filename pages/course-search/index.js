//index.js

Page({
  data: {
    linkToKeywords: {},
  },
  onLoad: function () {
    let that = this;
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
      that.setData({
        linkToKeywords: data.searchKeywords,
        inputValue: data.searchKeywords && data.searchKeywords.text || ''
      })
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})
