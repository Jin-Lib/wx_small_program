//index.js

//获取应用实例
const app = getApp()
const API = require('../../config/api');

Page({
  data: {
    selected: '0',
    orderData: []
  },
  onLoad: function () {
    this.getorderData();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  selectTab: function(e) {
    this.setData({
      selected: e.currentTarget.dataset.key
    }, () => {
      this.getorderData();
    });
  },
  // 获取订单信息
  getorderData: function () {
    API.getorder({
      type: this.data.selected
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
