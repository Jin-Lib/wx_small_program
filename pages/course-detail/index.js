//index.js
//获取应用实例
const app = getApp()
const API = require('../../config/api');

Page({
  data: {
    hiddenrule: true, //服务说明弹窗
    hiddengroup: true,  //拼团规则弹窗
    hiddensingle: true, //单独购买弹窗
    hiddenpintuan: true, //拼团购买弹窗
    hiddencancelpay: true, //确认取消支付弹窗
    hiddencancelpayd: true, //单购确认取消支付弹窗
    tabList: ['详情', '目录', '评价', '推荐'], // tab 分类
    currentTabSub: 0, // 记录当前tab下标
    isTopBtnShow: false, // 是否展示返回顶部按钮
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
    courseBannerDetail: [
      {
        type: 'video',
        src: 'http://cdn.koalaxiezi.com/bh1.mp4',
        poster: 'http://cdn.koalaxiezi.com/ceshi/2.png'
      },
      {
        src: 'http://cdn.koalaxiezi.com/ceshi/2.png',
      },
      {
        src: 'http://cdn.koalaxiezi.com/ceshi/2.png',
      },
    ], // banner 轮播区域数据
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  // 获取课程信息
  getdetailData: function () {
    API.getweek({
      id: 1
    }).then(res => {//成功
      console.log('课程详情', res);
      //const { rows } = res || {};

      this.setData({
        coursedetail: res
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },

  // 下单
  getcreateData: function () {
    API.getcreate({
      courseId: 1
    }).then(res => {//成功
      console.log(res);
      //const { rows } = res || {};
      wx.requestPayment(
        {
          'timeStamp': res.timeStamp,
          'nonceStr': res.nonceStr,
          'package': res.package,
          'signType': res.signType,
          'paySign': res.paySign,
          'success': function (res) {
            hiddenpintuan: !this.data.hiddenpintuan;
            hiddensingle: !this.data.hiddensingle;
            url: '/pages/course-share/index';
           },
          'fail': function (res) { },
          'complete': function (res) { }
        })
      this.setData({
        coursecreate: res,
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
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
    this.getcreateData();
    // wx.navigateTo({
    //   url: '/pages/course-play/index'
    // })
  },
  //点击团购支付按钮
  spell_pay: function (event) {
    wx.navigateTo({
      url: '/pages/course-share/index'
    })
  },
  // tab 切换
  tabChange: function(event) {
    this.setData({
      currentTabSub: event.currentTarget.dataset.sub
    })
  },
  onLoad: function () {
    this.getcreateData();

    this.getdetailData();

    // wx.navigateTo({
    //   url: '/pages/course-share/index'
    // })
  },

  /**
   * 监听页面滚动事件
   * @date 2020-09-04
   * @param {any} e
   * @returns {any}
   */
  onPageScroll: function(e) {
    this.setData({
      isTopBtnShow: e.scrollTop > 100
    })
  },
})
