//index.js

Page({
  data: {
    hiddenposter: true, //海报生成弹窗
    hiddenrecommend: true, //推荐语弹窗
    hiddenrule: true, //服务说明弹窗
    hiddengroup: true,  //拼团规则弹窗
    isTopBtnShow: false, // 是否展示返回顶部按钮
    isInvitationShow: false, // 是否展示立即邀请按钮
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
    tabChangeList: ['详情', '目录', '评价'], // tab切换目录
    currentTabSub: 0, // tab切换下标
  },
  //--分享出去，别人看到的页面--
  hhsr: function (event) {
    wx.navigateTo({
      url: '/pages/user-spell-group/index'
    })
  },
  //--分享出去，别人看到的已完成的页面--
  hhsrr: function (event) {
    wx.navigateTo({
      url: '/pages/group-success/index'
    })
  },
  //--分享出去，团购成功的页面--
  hhsrrr: function (event) {
    wx.navigateTo({
      url: '/pages/successful-purchase/index'
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
  //点击推荐语弹窗
  showrecommend: function (e) {
    this.setData({
      hiddenrecommend: !this.data.hiddenrecommend
    })
  },
  //点击推荐语错号
  showrecommenddj: function (e) {
    this.setData({
      hiddenrecommend: !this.data.hiddenrecommend,
      hiddenposter: !this.data.hiddenposter
    })
  },
  //点击推荐语错号
  showposter: function (e) {
    this.setData({
      hiddenposter: !this.data.hiddenposter
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
      isInvitationShow: e.scrollTop > 170
    })
  },
  /**
   * tab切换时
   * @date 2020-09-04
   * @param {any} event
   * @returns {any}
   */
  tabChangeClick: function(event) {
    this.setData({
      currentTabSub: event.currentTarget.dataset.sub
    })
  }
})
