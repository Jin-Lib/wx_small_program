//index.js
//获取应用实例
const app = getApp()
const API = require('../../config/api');

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    recommendedAge: ['4岁', '5岁'],
    recommendedAgeSelectIndex: 0,
    recommendedList: [
      {
        logoSrc: "http://cdn.koalaxiezi.com/image1/product.jpg",
        title: "世界地理之最",
        desc: "9天提升科学探索欲望",
        buyCount: '77098',
        buyImages: [
          "http://cdn.koalaxiezi.com/image1/product.jpg",
          "http://cdn.koalaxiezi.com/image1/product.jpg",
          "http://cdn.koalaxiezi.com/image1/product.jpg",
          "http://cdn.koalaxiezi.com/image1/product.jpg",
          "http://cdn.koalaxiezi.com/image1/product.jpg",
        ]
      }
    ],

    bannerData: [
    ]
  },


  onLoad: function () {
    this.getBannerData();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }

  },

  // 获取banner
  getBannerData: function() {
    API.getBanner({
      type: 1
    }).then(res => {
      console.log(res);
      const { rows } = res || {};

      this.setData({
        bannerData: rows || []
      });
    }).catch(err => {
      wx.showToast({
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },

  //点击浮窗活动右下角
  bottom_advertising: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },

  //点击搜索
  search: function (event) {
    wx.navigateTo({
      url: '/pages/course-search/index'
    })
  },
  //点击轮播图
  carousel: function (event) {
    // wx.navigateTo({
    //   url: '/pages/course-detail/index'
    // })
  },
  //点击排行榜
  leaderboard: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击大语文
  chinese: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  //点击天文地理
  geography: function (event) {
    wx.navigateTo({
      url: '/pages/course-menu/index'
    })
  },
  //点击名师专区
  teacher: function (event) {
    wx.navigateTo({
      url: '/pages/course-menu/index'
    })
  },
  //点击全部课程
  allcourses: function (event) {
    wx.navigateTo({
      url: '/pages/course-all/index'
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

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  // 智能推荐 选择年龄
  recommendedAgeSelect(event) {
    this.setData({
      recommendedAgeSelectIndex: event.detail.value
    }, () => {
      console.log('选择完成')
    })
  },
  // 上拉加载
  onReachBottom() {
    const resultList = {
      logoSrc: "http://cdn.koalaxiezi.com/image1/product.jpg",
      title: "世界地理之最",
      desc: "9天提升科学探索欲望",
      buyCount: '77098',
      buyImages: [
        "http://cdn.koalaxiezi.com/image1/product.jpg",
        "http://cdn.koalaxiezi.com/image1/product.jpg",
        "http://cdn.koalaxiezi.com/image1/product.jpg",
        "http://cdn.koalaxiezi.com/image1/product.jpg",
        "http://cdn.koalaxiezi.com/image1/product.jpg",
      ]
    }
    wx.showLoading({
      title: '努力加载中',
    })
    setTimeout(() => {
      this.setData({
        recommendedList: this.data.recommendedList.concat(new Array(5).fill(resultList))
      }, () => {
        wx.hideLoading()
      })
    }, 2000)
  },
  // 点击banner详情图
  bannerTap: function (event) {
    const target = event.currentTarget;
    const { dataset: { bannerType, url } } = target;

    // 处理不同类型的点击事件
    switch (bannerType) {
      // 跳转h5
      case 1:
        console.log('跳转h5')
        break;
      // 跳转小程序页面
      case 2:
        console.log('跳转小程序页面')
        break;
      // 跳转播放视频
      case 3:
        console.log('跳转播放视频')
        break;
    }
  }
})
