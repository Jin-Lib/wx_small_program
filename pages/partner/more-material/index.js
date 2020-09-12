//index.js

Page({
  data: {
    hiddenkg: true,//新老用户免拼规则弹窗
    contents: '常爸大语文年课L1来了~ \n 语文特级团队专为4-6岁孩子打造，趣味动画+智能ai互动学习，48周助力宝宝打造核心基础！附赠实物教具大礼包',
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
