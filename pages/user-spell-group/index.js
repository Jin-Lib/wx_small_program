//index.js

Page({
  data: {
    hiddenrule: true, //服务说明弹窗
    hiddengroup: true,  //拼团规则弹窗
    hiddensingle: true, //单独购买弹窗
    hiddenpintuan: true, //拼团购买弹窗
    hiddencancelpay: true, //确认取消支付弹窗
    hiddencancelpayd: true, //单购确认取消支付弹窗
    isTopBtnShow: false, // 是否展示返回顶部按钮
    isShowBottonBuy: false, // 是否展示底部购买
    spellGroupList: [
      {
        image: 'https://wx.qlogo.cn/mmopen/vi_32/cZ0jibwydlA3pVRYXKicTiaFNtsApQ8lbhTe757lTDaZ2IvibTI0JiaicGLyPzuS9Bwd1IH1zPyyS1c3PXpVibg7R1A5g/132',
        nick: '天空之岚风雨行不1',
        status: '1分钟前拼团成功'
      },
      {
        image: 'https://wx.qlogo.cn/mmopen/vi_32/cZ0jibwydlA3pVRYXKicTiaFNtsApQ8lbhTe757lTDaZ2IvibTI0JiaicGLyPzuS9Bwd1IH1zPyyS1c3PXpVibg7R1A5g/132',
        nick: '天空之岚风雨行不2',
        status: '1分钟前拼团成功'
      },
      {
        image: 'https://wx.qlogo.cn/mmopen/vi_32/cZ0jibwydlA3pVRYXKicTiaFNtsApQ8lbhTe757lTDaZ2IvibTI0JiaicGLyPzuS9Bwd1IH1zPyyS1c3PXpVibg7R1A5g/132',
        nick: '天空之岚风雨行不3',
        status: '1分钟前拼团成功'
      },
    ], // 拼团列表
  },
  onReady() {
    this.setData({
      container: () => wx.createSelectorQuery().select('#navigation-wrap')
    }, () => {
      console.log(this.data.container())
    })
  },
  //服务说明按钮
  showrule: function (e) {
    this.setData({
      hiddenrule: !this.data.hiddenrule
    })
  },
  //拼团规则按钮
  showgroup: function (e) {
    this.setData({
      hiddengroup: !this.data.hiddengroup
    })
  },
  //点击返回首页按钮
  return_index: function (event) {
    wx.navigateTo({
      url: '/pages/mall/index'
    })
  },
  //拼团购买弹窗按钮
  showpintuan: function (e) {
    this.setData({
      hiddenpintuan: !this.data.hiddenpintuan,
    })
  },
  //拼团关闭弹窗按钮
  showpintuangb: function (e) {
    this.setData({
      hiddencancelpay: !this.data.hiddencancelpay
    })
  },
  //拼团确定离开按钮
  showcancelpay: function (e) {
    this.setData({
      hiddencancelpay: !this.data.hiddencancelpay,
      hiddenpintuan: !this.data.hiddenpintuan,
    })
  },
  //拼团继续支付按钮
  showcarry: function (e) {
    this.setData({
      hiddencancelpay: !this.data.hiddencancelpay
    })
  },
  //点击团购支付按钮
  spell_pay: function (event) {
    wx.navigateTo({
      url: '/pages/course-share/index'
    })
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 监听页面滚动事件
   * @date 2020-09-04
   * @param {any} e
   * @returns {any}
   */
  onPageScroll: function(e) {
    this.setData({
      isTopBtnShow: e.scrollTop > 100,
      isShowBottonBuy: e.scrollTop > 100
    })
  },
})
