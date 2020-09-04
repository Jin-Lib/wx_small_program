
//获取应用实例
const app = getApp()
const API = require('../../../config/api');

Page({
  data: {
    hidden:false,
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
    partner: true,
    partner1: false,
    partner2: false,
    partner3: false,

    partnerq: true,
    partner1q: false,
    partner2q: false,
    partner3q: false,

    partnerw: true,
    partner1w: false,
    partner2w: false,
    partner3w: false,

    partnere: true,
    partner1e: false,
    partner2e: false,
    partner3e: false,

    partnerr: true,
    partner1r: false,
    partner2r: false,
    partner3r: false,

    bannerData: [
    ]
  },
  partner: function (e) {
    this.setData({
      partner1: false,
      partner: true,
      partner2: false,
      partner3: false,
    });
  },
  partner1: function (e) {
    this.setData({
      partner: false,
      partner1: true,
      partner2: false,
      partner3: false,
    });
  },
  partner2: function (e) {
    this.setData({
      partner: false,
      partner1: false,
      partner2: true,
      partner3: false,
    });
  },
  partner3: function (e) {
    this.setData({
      partner: false,
      partner1: false,
      partner2: false,
      partner3: true,
    });
  },

/*第二个 */
  partnerq: function (e) {
    this.setData({
      partner1q: false,
      partnerq: true,
      partner2q: false,
      partner3q: false,
    });
  },
  partner1q: function (e) {
    this.setData({
      partnerq: false,
      partner1q: true,
      partner2q: false,
      partner3q: false,
    });
  },
  partner2q: function (e) {
    this.setData({
      partnerq: false,
      partner1q: false,
      partner2q: true,
      partner3q: false,
    });
  },
  partner3q: function (e) {
    this.setData({
      partnerq: false,
      partner1q: false,
      partner2q: false,
      partner3q: true,
    });
  },


  /*第三个 */
  partnerw: function (e) {
    this.setData({
      partner1w: false,
      partnerw: true,
      partner2w: false,
      partner3w: false,
    });
  },
  partner1w: function (e) {
    this.setData({
      partnerw: false,
      partner1w: true,
      partner2w: false,
      partner3w: false,
    });
  },
  partner2w: function (e) {
    this.setData({
      partnerw: false,
      partner1w: false,
      partner2w: true,
      partner3w: false,
    });
  },
  partner3w: function (e) {
    this.setData({
      partnerw: false,
      partner1w: false,
      partner2w: false,
      partner3w: true,
    });
  },

  /*第四个 */

  partnere: function (e) {
    this.setData({
      partner1e: false,
      partnere: true,
      partner2e: false,
      partner3e: false,
    });
  },
  partner1e: function (e) {
    this.setData({
      partnere: false,
      partner1e: true,
      partner2e: false,
      partner3e: false,
    });
  },
  partner2e: function (e) {
    this.setData({
      partnere: false,
      partner1e: false,
      partner2e: true,
      partner3e: false,
    });
  },
  partner3e: function (e) {
    this.setData({
      partnere: false,
      partner1e: false,
      partner2e: false,
      partner3e: true,
    });
  },



  /*第五个 */


  partnerr: function (e) {
    this.setData({
      partner1r: false,
      partnerr: true,
      partner2r: false,
      partner3r: false,
    });
  },
  partner1r: function (e) {
    this.setData({
      partnerr: false,
      partner1r: true,
      partner2r: false,
      partner3r: false,
    });
  },
  partner2r: function (e) {
    this.setData({
      partnerr: false,
      partner1r: false,
      partner2r: true,
      partner3r: false,
    });
  },
  partner3r: function (e) {
    this.setData({
      partnerr: false,
      partner1r: false,
      partner2r: false,
      partner3r: true,
    });
  },

















  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true,
      selected2: false,
      selected3: false,
      selected4: false,
    });
  },
  selected2: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: true,
      selected3: false,
      selected4: false,
    });
  },
  selected3: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: true,
      selected4: false,
    });
  },
  selected4: function (e) {
    this.setData({
      selected: false,
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: true,
    });
  },
  //红包按钮
  show: function (e) {
    this.setData({
      hidden: !this.data.hidden
    })
  },
  onLoad: function () {
    this.getBannerData();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  // 获取banner
  getBannerData: function () {
    API.getBanner({
      type: 1
    }).then(res => {//成功
      console.log(res);
      //const { rows } = res || {};
      const rows = res && res.rows || []

      this.setData({
        bannerData: rows || []
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },
})
