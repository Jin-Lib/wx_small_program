//index.js

Page({
  data: {
    hiddenkg: true,//新老用户免拼规则弹窗
    contents:`常爸大语文年课L1来了~\n文特级团队专为4-6岁孩子打造，趣味动画+智能ai互动学习，48周助力宝宝打造核心基础！\n附赠实物教具大礼包\n戳->http://klart.cn`,
    videolink:`http://cdn.koalaxiezi.com/ceshi/b2de3c4ec55167e7e1344dc074d35684.mp4`,
    sponsoredlinks:`http://klart.cn`,
  },
  /**复制文案 */
  copywriting: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '文案已复制去粘贴'
            })
          }
        })
      }
    })
  },
  /**复制视频链接 */
  copyvideolink: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '视频链接已复制去粘贴'
            })
          }
        })
      }
    })
  },
  /**复制推广链接 */
  copysponsoredlinks: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '推广链接已复制去粘贴'
            })
          }
        })
      }
    })
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
