const app = getApp()
const Auth = require('../../utils/auth');

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wxlogin: true,
  },

  onLoad: function () {
    this.getUserInfo();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }

    this.isLogin();

  },

  // 获取用户信息
  getUserInfo: function() {
    let that = this;
    API.getUserInfo()
      .then(data => {
        that.setData({
          userInfo: data,
        });
      }).catch(err => {
        console.log('err', err)
        if(err == '登录已过期') {
          that.setData({
            wxlogin: false
          });
        }
      });
  },

  // 是否登录
  isLogin: function() {
    // 是否登录
    Auth.checkHasLogined()
      .then(res => {
        if(res) {
          this.setData({
            wxlogin: true
          });
        } else {
          this.setData({
            wxlogin: false
          });
        }
      }).catch(e => {
        this.setData({
          wxlogin: false
        });
      })
  },

  getUserInfoDetail: function() {
    this.setData({
      wxlogin: true
    });
    this.getUserInfo();
  },
  
  //点击修改信息
  information: function (event) {
    wx.navigateTo({
      url: '/pages/user-info/index'
    })
  },
  //点击学分
  credit: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击优惠券
  coupon: function (event) {
    wx.navigateTo({
      url: '/pages/user-coupons/index'
    })
  },
  //点击积分商城
  mall: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击问答挑战
  challenge: function (event) {
    wx.navigateTo({
      url: '/pages/user-challenge/index'
    })
  },
  //点击专属特权
  privilege: function (event) {
    wx.navigateTo({
      url: '/pages/user-privilege/index'
    })
  },
  //点击我的订单
  order: function (event) {
    wx.navigateTo({
      url: '/pages/user-order/index'
    })
  },
  //点击意见反馈
  feedback: function (event) {
    wx.navigateTo({
      url: '/pages/user-feedback/index'
    })
  },
  //点击咨询客服
  advisory: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },

})
