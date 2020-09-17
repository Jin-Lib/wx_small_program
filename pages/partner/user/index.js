//index.js
const API = require('../../../config/api');

Page({
  data: {
    userInfo: {}, // 用户信息
  },


  //累计总收益
  totalrevenue: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-totalrevenue/index'
    })
  },
  //当前粉丝数
  numberoffans: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-numberoffans/index'
    })
  },
  //社群合伙人数
  community: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-community/index'
    })
  },
  //提现
  withdraw: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-withdraw/index'
    })
  },
  //临时粉丝
  temporaryfans: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-temporaryfans/index'
    })
  },
  //赠课锁粉
  lockpowder: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-lockpowder/index'
    })
  },
  //品牌介绍
  introduction: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-introduction/index'
    })
  },
  //最近访客
  visitors: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-visitors/index'
    })
  },
  //通讯录
  addressbook: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-addressbook/index'
    })
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getPartnerInfo();
  },

  /**
   * 获取合伙人详情
   * @date 2020-09-17
   * @returns {any}
   */
  getPartnerInfo() {
    API.getPartnerInfo()
      .then(resp => {
        this.setData({
          userInfo: resp
        })
      })
  },
})
