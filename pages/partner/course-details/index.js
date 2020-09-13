//index.js

Page({
  data: {
    hiddenshare:true,//分享海报弹窗
    hiddenkg: true,//新老用户免拼规则弹窗
    hiddenrule: true, //服务说明弹窗
    hiddensingle: true, //单独购买弹窗
    hiddencancelpay: true, //确认取消支付弹窗
    hiddencancelpayd: true, //单购确认取消支付弹窗
    isTopBtnShow: false, // 是否展示返回顶部按钮
    isShowBottonBuy: false, // 是否展示底部购买
    countDownNum: '1',//倒计时初始值
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

  //--分享出去，别人看到的页面--
  hhsr: function (event) {
    wx.navigateTo({
      url: '/pages/partner/b-course-details/index'
    })
  },
  //定时器
  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum;//获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.setData({
      timer: setInterval(function () {//这里把setInterval赋值给变量名为timer的变量
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum
        })
        //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
        if (countDownNum == 0) {
          //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
          //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
          console.log(12)
          that.setData({
            hiddenkg: !that.data.hiddenkg
          });
          clearInterval(that.data.timer);
          //关闭定时器之后，可作其他处理codes go here
        }
      }, 7000)
    })
  },
  onReady() {
    this.setData({
      container: () => wx.createSelectorQuery().select('#navigation-wrap')
    }, () => {
      console.log(this.data.container())
    })
  },
  //新老用户免拼规则按钮
  showkg: function (e) {
    this.countDown();
    this.setData({
      hiddenkg: !this.data.hiddenkg
    })
  },
  //分享弹窗
  showsharehb: function (e) {
    this.setData({
      hiddenshare: !this.data.hiddenshare
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
  //单独购买弹窗按钮
  showsingled: function (e) {
    this.setData({
      hiddensingle: !this.data.hiddensingle
    })
  },

  //单购关闭弹窗购买按钮
  showsinglegb: function (e) {
    this.setData({
      hiddencancelpayd: !this.data.hiddencancelpayd
    })
  },
  //单购确定离开按钮
  showcancelpayd: function (e) {
    this.setData({
      hiddencancelpayd: !this.data.hiddencancelpayd,
      hiddensingle: !this.data.hiddensingle,
    })
  },
  //单购继续支付按钮
  showcarryd: function (e) {
    this.setData({
      hiddencancelpayd: !this.data.hiddencancelpayd
    })
  },
  //点击单购支付按钮
  single_pay: function (event) {
    wx.navigateTo({
      url: '/pages/course-play/index'
    })
  },

  //更多素材按钮
  moremater: function (event) {
    wx.navigateTo({
      url: '/pages/partner/more-material/index'
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
  onPageScroll: function (e) {
    this.setData({
      isTopBtnShow: e.scrollTop > 100,
    })
  },
})
