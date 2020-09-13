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

  // 支付
  pay: function(e) {
    let that = this;
    wx.showLoading({
      title: '获取支付信息...',
    })

    API.pay({
      orderNo: e.currentTarget.dataset.orderno
    }).then(res => {//成功
      wx.hideLoading()
      wx.requestPayment({
        'timeStamp': res.timeStamp,
        'nonceStr': res.nonceStr,
        'package': res.package,
        'signType': res.signType,
        'paySign': res.paySign,
        'success': function (res) {
          wx.showToast({
            title: res.isGroup ? '创建拼团成功' : '购买成功',
            icon: 'none',
            duration: 1000
          })
          that.getorderData();
          if(res.isGroup) {
            wx.navigateTo({
              url: `/pages/course-share/index?groupId=${res.groupId}&id=${e.currentTarget.dataset.id}`
            })
          }
          
          },
        'fail': function (res) { },
        'complete': function (res) { }
      })
    }).catch(err => {
      wx.hideLoading()
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  }
})
