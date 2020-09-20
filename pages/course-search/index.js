//index.js

const app = getApp()
const API = require('../../config/api');
Page({
  data: {
    linkToKeywords: {},
    //默认值  默认显示左上角
    navbarData: {
      showCapsule: 1
    },
    statusBarHeight: app.globalData.statusBarHeight,
  },
  //--搜索页--
  hhsr: function (event) {
    wx.navigateTo({
      url: '/pages/course-search-detail/index'
    })
  },
    //点击返回首页
  findex: function() {
    wx.navigateBack({
      delta: 1   //默认值是1
    })
  },
  onLoad: function () {
    // 返回
    // wx.reLaunch({
    //   url: '../logs/logs'
    // })
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 :                    e.statusBarHeight + 45;
     }
    });
 
    let that = this;
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
      that.setData({
        linkToKeywords: data.searchKeywords,
        inputValue: data.searchKeywords && data.searchKeywords.text || ''
      })
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getkeyword();
    this.searchCourseList();

  },
  searchCourseList: function () {
    API.searchCourseList({
      name: `发电`
    }).then(res => {//成功
      this.setData({
        searchCourseList: res,
        searchCourseListw: res.items,
      });
      console.log(res.items)
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },
  //热词搜索
  getkeyword: function () {
    API.getkeyword({
      code: 0
    }).then(res => {//成功
      this.setData({
        keyword: res,
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
