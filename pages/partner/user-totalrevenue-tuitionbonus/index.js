//index.js
const API = require('../../../config/api');

Page({
  data: {
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getPartnerAmountDetail();
  },

  getPartnerAmountDetail() {
    API.getPartnerAmountDetail()
      .then(resp => {
        console.log('resp', resp)
        this.setData({
          info: resp
        })
      })
  }
})
