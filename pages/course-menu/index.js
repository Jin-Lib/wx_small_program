//index.js
const API = require('../../config/api');

Page({
  data: {
    courseData: []
  },
  onLoad: function (options) {
    this.getCourseByCateData(options.cateId);
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  // 获取课程
  getCourseByCateData: function (cateId) {
    API.getCourseByCate({
      cateId
    }).then(res => {//成功
      console.log(res);
      //const { rows } = res || {};
      const rows = res && res.rows || []

      this.setData({
        courseData: rows || []
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },

  //点击轮播图
  carousel: function (event) {
    wx.navigateTo({
      url: '/pages/course-detail/index'
    })
  },
  //点击商品详情
  details: function (event) {
    wx.navigateTo({
      url: '/pages/course-detail/index'
    })
  },

})
