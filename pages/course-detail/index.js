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
    wx.navigateTo({
      url: '/pages/course-play/index'
    })
  },
  //点击团购支付按钮
  spell_pay: function (event) {
    wx.navigateTo({
      url: '/pages/course-share/index'
    })
  },
  onLoad: function () {
    this.getdetailData();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  // 获取课程信息
  getdetailData: function () {
    API.getBanner({
      type: 1
    }).then(res => {
      const { code, data } = res || {};

      // 如果code为0，代表成功
      if (code == '0') {
        this.setData({
          bannerData: data && data.rows || []
        });
      }
    })
  },

})
