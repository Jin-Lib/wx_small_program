//index.js
const API = require('../../../config/api');

Page({
  data: {
    info: {},
  },

  //推课奖金
  tuitionbonus: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-totalrevenue-tuitionbonus/index'
    })
  },

  //活动奖金
  activitybonus: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-totalrevenue-activitybonus/index'
    })
  },

  //直邀奖金
  directinvitationbonus: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-totalrevenue-directinvitationbonus/index'
    })
  },

  //间接奖金
  indirectbonus: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-totalrevenue-indirectbonus/index'
    })
  },

  //管理奖金
  managementbonus: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-totalrevenue-managementbonus/index'
    })
  },

  //培育奖金
  cultivationbonus: function (event) {
    wx.navigateTo({
      url: '/pages/partner/user-totalrevenue-cultivationbonus/index'
    })
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getPartnerAmount();
  },

  getPartnerAmount() {
    API.getPartnerAmount()
      .then(resp => {
        console.log('resp', resp)
        this.setData({
          info: resp
        })
      })
  }
})
