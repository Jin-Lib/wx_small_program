//index.js
//获取应用实例
const app = getApp()
const API = require('../../config/api');

Page({
  searchSwiperSub: 0,

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
          "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKgicHcQo3k7TAsCk2yx83dibmjfjuYc802xhESE0ibJYWrchL9gCAFgRXvsw8ictEL4J2cSlaqFXtwrg/132",
          "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJzTZiciatBCickuevSAsGPxI4xJmZptoXibsTl8MxcBhae45y5hsxWWgrjafpYkSROSPqP3mbPHeAVUA/132",
          "https://wx.qlogo.cn/mmopen/vi_32/cZ0jibwydlA3pVRYXKicTiaFNtsApQ8lbhTe757lTDaZ2IvibTI0JiaicGLyPzuS9Bwd1IH1zPyyS1c3PXpVibg7R1A5g/132",
          "http://cdn.koalaxiezi.com/image1/product.jpg",
        ]
      }
    ],

    bannerData: [
      {
        id: 1,
        url: "http://cdn.koalaxiezi.com/image1/product.jpg",
        image_url: "http://cdn.koalaxiezi.com/image1/product.jpg",
        banner_type: 1
      },
      {
        id: 1,
        url: "http://cdn.koalaxiezi.com/image1/product.jpg",
        image_url: "http://cdn.koalaxiezi.com/image1/product.jpg",
        banner_type: 2
      },
      {
        id: 1,
        url: "http://cdn.koalaxiezi.com/image1/product.jpg",
        image_url: "http://cdn.koalaxiezi.com/image1/product.jpg",
        banner_type: 3
      }
    ],

    searchKeywords: [
      {
        text: '奥数',
        id: 1,
      },
      {
        text: '关键字',
        id: 2,
      },
      {
        text: '画画',
        id: 3,
      },
    ],

    types: []
  },

  //合伙人临时入口
  hhsr: function (event) {
    wx.navigateTo({
      url: '/pages/partner/partner-mall/index'
    })
  },

  onLoad: function () {
    this.getBannerData();
    this.getTypeData();
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
      const { code, data, rows } = res || {};

      // 如果code为0，代表成功
      this.setData({
        bannerData: rows || []
      });
    })
  },

  // 获取类目
  getTypeData: function() {
    API.getType().then(res => {
      const { rows } = res || {};

      // 如果code为0，代表成功
      this.setData({
        types: rows || []
      });
    })
  },

  // 显示爆款
  getSomeCourseList: function() {},

  //点击浮窗活动右下角
  bottom_advertising: function (event) {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },

  //点击搜索
  search: function (event) {
    console.log()
    let searchKeywords;
    if (this.searchSwiperSub !== -1) {
      searchKeywords = this.data.searchKeywords[this.searchSwiperSub]
    }

    wx.navigateTo({
      url: '/pages/course-search/index',
      success: function(res) {
        res.eventChannel.emit('acceptDataFromOpenerPage', { searchKeywords })
      }
    })
  },
  //点击轮播图
  carousel: function (event) {
    // wx.navigateTo({
    //   url: '/pages/course-detail/index'
    // })
  },

  // 点击类目
  onClickM: function(e) {
    console.log(e);
    const { type, id, typeid } = e.currentTarget.dataset;

    switch(type) {
      case 1: // 排行榜
        break;
      case 2: // 课程
        wx.navigateTo({
          url: '/pages/course-menu/index'
        })
        break;
      case 3: // 全部课程
        wx.navigateTo({
          url: '/pages/course-all/index'
        })
        break;
    }
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
    })
  },
  // 上拉加载
  onReachBottom() {
    const resultList = {
      logoSrc: "http://cdn.koalaxiezi.com/image1/product.jpg",
      title: "世界地理之最",
      desc: "9天提升科学探索欲望",
      buyCount: '77098',
      buyImages: ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKgicHcQo3k7TAsCk2yx83dibmjfjuYc802xhESE0ibJYWrchL9gCAFgRXvsw8ictEL4J2cSlaqFXtwrg/132",
        "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJzTZiciatBCickuevSAsGPxI4xJmZptoXibsTl8MxcBhae45y5hsxWWgrjafpYkSROSPqP3mbPHeAVUA/132",
        "https://wx.qlogo.cn/mmopen/vi_32/cZ0jibwydlA3pVRYXKicTiaFNtsApQ8lbhTe757lTDaZ2IvibTI0JiaicGLyPzuS9Bwd1IH1zPyyS1c3PXpVibg7R1A5g/132",
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
  },

  searchSwiperChange: function(event) {
    this.searchSwiperSub = event.detail.current;
  }
})
