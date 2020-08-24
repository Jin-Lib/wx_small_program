//index.js
//获取应用实例
const app = getApp()

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
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
  onLoad: function () {
    
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
})
