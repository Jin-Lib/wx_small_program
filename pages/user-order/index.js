//index.js

//获取应用实例
const app = getApp()
const API = require('../../config/api');

Page({
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
    orderData: [
    ]
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
    });
  },
  selected3: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
    });
  },
  selected4: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
    });
  },
  onLoad: function () {
    this.getorderData();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  // 获取订单信息
  getorderData: function () {
    API.getorder({
      type: 0
    }).then(res => {//成功
      console.log(res);
      //const { rows } = res || {};
      const rows = res && res.rows || []

      this.setData({
        orderData: rows || []
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },
})
