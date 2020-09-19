//index.js
const API = require('../../../config/api');

Page({
  data: {
    selectedKey: '1',

    panigation: {
      page: 1,
      pageSize: 10
    },
    shortFansListData: []
  },
  
  selected: function (e) {
    this.setData({
      selectedKey: e.currentTarget.dataset.key,
      panigation: {
        ...this.data.panigation,
        page: 1
      }
    }, () => {
      this.getShortFansList();
    });
  },
  
  //点击立即去推广
  tuiguang: function(event) {
    wx.navigateTo({
      url: '../partner-mall/index'
    })
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getShortFansList();
  },

  /**
   * 获取临时粉丝
   */
  getShortFansList() {
    let params = {
      ...this.data.panigation
    };

    API.shortFansList(params)
      .then(resp => {
        this.setData({
          shortFansListData: resp && resp.list || []
        })
      })
  },
})
