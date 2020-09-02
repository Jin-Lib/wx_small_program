
//获取应用实例
const app = getApp()
const API = require('../../config/api');

Page({
  data: {
  },
  onLoad: function () {
    this.getinfoData()
  },
  // 获取用户信息
  getinfoData: function () {
    API.getinfo({
      code: 0
    }).then(res => {//成功
      console.log(res);
      //const { rows } = res || {};

      this.setData({
        infodetail: res
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})
