
//获取应用实例
const app = getApp()
const API = require('../../config/api');

Page({
  data: {
    hidden: true, //头像弹窗
    namehidden: true, //修改姓名弹窗
    iphonehidden: true, //修改手机号弹窗
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    recommendedAge: ['4岁', '5岁'],
    recommendedAgeSelectIndex: 0,
    recommendedAgexb: ['0', '1'],
    recommendedAgeSelectIndexxb: 0,
  },
  //头像弹窗按钮
  clickImg: function (e) {
    this.setData({
      hidden: !this.data.hidden
    })
  },
  //姓名弹窗
  nameshow: function (e) {
    this.setData({
      namehidden: !this.data.namehidden
    })
  },
  //手机号弹窗
  iphoneshow: function (e) {
    this.setData({
      iphonehidden: !this.data.iphonehidden
    })
  },
  // 选择生日
  recommendedAgeSelect(event) {
    this.setData({
      recommendedAgeSelectIndex: event.detail.value
    }, () => {
      console.log('选择完成')
    })
  },
  // 选择性别
  recommendedAgeSelectxb(event) {
    this.setData({
      recommendedAgeSelectIndexxb: event.detail.value
    }, () => {
      console.log('选择完成')
    })
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
