//index.js
//获取应用实例
const app = getApp()
<<<<<<< HEAD
const API = require('../../config/api');
const Auth = require('../../utils/auth');
=======
>>>>>>> 6010c7cc8905e6914b56fa808d35e47146b429b8

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
<<<<<<< HEAD

    // 我的拼团信息
    orderData: [],
    // 我的课程信息
    courseData: [],
    
    wxlogin: true,
=======
>>>>>>> 6010c7cc8905e6914b56fa808d35e47146b429b8
  },
  //点击邀好友拼团
  invitefriends: function (event) {
    wx.navigateTo({
      url: '/pages/course-share/index'
    })
  },
  //点击添加课程
  addclass: function (event) {
    wx.navigateTo({
      url: '/pages/course-all/index'
    })
  },
  //点击课程学习页
  learningpage: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击限时爆款更多
  more: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击商品详情
  details: function (event) {
    wx.navigateTo({
      url: '/pages/course-detail/index'
    })
  },
  lessons: function (event) {
    wx.navigateTo({
      url: '/pages/course-play/index'
    })
  },
  onLoad: function () {
<<<<<<< HEAD
    this.initData();

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
    this.isLogin();

  },

  initData: function() {
    // 获取我的拼团列表
    this.getorderData("2");
    // 获取我的课程列表
    this.getorderData("4");
=======

    //  tab切换
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    });

>>>>>>> 6010c7cc8905e6914b56fa808d35e47146b429b8
  },
  //  tab切换逻辑
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  
<<<<<<< HEAD
  // 获取订单信息
  getorderData: function (type) {
    API.getorder({
      type
    }).then(res => {//成功
      const rows = res && res.rows || []
      if(type === '2') {
        this.setData({
          orderData: rows || []
        });
      } else if(type === '4') {
        this.setData({
          courseData: rows || []
        });
      }
      
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
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
    console.log('test');
    this.setData({
      wxlogin: true
    });
    this.initData();
  },

=======
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }

  },
>>>>>>> 6010c7cc8905e6914b56fa808d35e47146b429b8
})
