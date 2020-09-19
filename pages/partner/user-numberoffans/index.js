//index.js
const API = require('../../../config/api');

Page({
  data: {

    panigation: {
      page: 1,
      pageSize: 10
    },
    fansListData: []
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getFansList();
  },

  /**
   * 获取临时粉丝
   */
  getFansList() {
    let params = {
      ...this.data.panigation
    };

    API.fansList(params)
      .then(resp => {
        this.setData({
          fansListData: resp && resp.list || []
        })
      })
  },
})
