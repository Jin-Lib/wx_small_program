//index.js
const API = require('../../../config/api');

Page({
  page: "1",
  pageSize: "20",

  data: {
    dataList: [],
    scrollH: 0,
    typeKeyMap: {
      "push_coure": "推课",
      "active_amount":"活动奖金",
      "direct_amount":"直接内推",
      "indirect_amount":"间接内推",
      "team_amount": "团队奖金",
      "breed_amount":"培育奖金",
    },
  },
  onLoad: function () {
    this.getSystemInfo();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getPartnerAmountDetail(this.page, this.pageSize);
  },

  getSystemInfo() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          scrollH: res.windowHeight
        })
      }
    })
  },

  /**
   * 合伙人收入详情
   * @date 2020-09-19
   * @returns {any}
   */
  getPartnerAmountDetail(page, pageSize) {
    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
      title: '加载中',
      icon: 'loading',
    });
    API.getPartnerAmountDetail({
      page, pageSize
    })
      .then(resp => {
        wx.hideLoading();
        if (!resp.list.length) {
          wx.showToast({
            title: '我也是有底线的',
            icon: 'success',
            duration: 1000
          });
        } else {
          this.setData({
            dataList: this.data.dataList.concat(resp && resp.list || [])
          })
        }
      })
      .catch(() => {
        wx.hideLoading();
        wx.showToast({
          title: '当前网络异常!',
          icon: 'none',
          duration: 1000
        });
      })
  },

  /**
   * 滚动到底部
   * @date 2020-09-19
   * @returns {any}
   */
  lowerEvent() {
    this.page = this.page * 1 + 1 + '';
    this.getPartnerAmountDetail(this.page, this.pageSize)
  },

})
