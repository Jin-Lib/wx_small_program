//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
  },
  //点击邀好友拼团
  invitefriends: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
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

  onLoad: function () {

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
})
