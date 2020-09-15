//index.js
//获取应用实例
const app = getApp()
const API = require('../../config/api');
let myStyle = `
--bg-color:#fc4850;
`

let chageStyle = `
--bg-color:#ffffff;
`

Page({
  searchSwiperSub: 0,

  data: {
    viewData: {
      style: myStyle
    },
    statusBarHeight: app.globalData.statusBarHeight,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    recommendedAge: [],
    recommendedAgeSelectIndex: 0,
    // 推荐课程
    recommendCourseData: [
    ],

    bannerData: [],

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

    types: [],
    // 限时爆款
    limitTimeCourseData: [],
    // 最新上架
    newCourseData: [],
    // 今日热销
    todayHotCourseData: [],
    // 智能推荐
    courseList: [],
    panigation: {
      page: 1,
      pageSize: 10
    },
    isMore: true,

    userInfo: {}
  },

  //合伙人临时入口
  hhsr: function (event) {
    wx.navigateTo({
      url: '/pages/partner/partner-mall/index'
    })
  },

  onLoad: function () {
    // 获取系统状态栏信息
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
      }
    });
 
    this.getBannerData();
    this.getTypeData();
    this.getSomeCourseList('1');
    this.getSomeCourseList('2');
    this.getSomeCourseList('3');
    this.recommendData();

    this.getIndexCateCourse();

    this.getinfoData();

    this.createAgeList();
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
  getSomeCourseList: function(type) {
    let params = {
      activity_type: type,
      page: 1,
      pageSize: 10
    };

    API.activity(params).then(res => {
      const { list = [] } = res || {};

      switch(type) {
        case '1':  // 限时爆款
          this.setData({
            limitTimeCourseData: list || []
          });
          break;
        case '2':  // 最新上架
          this.setData({
            newCourseData: list || []
          });
          break;
        case '3':  // 今日热销
          this.setData({
            todayHotCourseData: list || []
          });
          break;
      }
      
    })
  },

  // 推荐
  recommendData: function() {
    wx.showLoading({
      title: '努力加载中',
    })
    API.recommend({
      scene: 'index',
      ...this.data.panigation
    }).then(res => {//成功
      let data = res && res.items || [];

      if(data.length < this.data.panigation.pageSize) {
        this.setData({
          isMore: false
        });
      }
      this.setData({
        recommendCourseData: this.data.recommendCourseData.concat(res && res.items || []) 
      });
      wx.hideLoading()
    }).catch(err => {
      wx.hideLoading()
    })
  },

  // 智能推荐课程列表
  searchCourseList: function() {
    let that = this;
    let { recommendedAgeSelectIndex, recommendedAge } = this.data;
    let param = {
      page: 1,
      pageSize: 10,
    };

    if(recommendedAgeSelectIndex === 0) {
      param.minAge = 0;
      param.maxAge = 3;
    } else {
      let age = parseInt(recommendedAge[recommendedAgeSelectIndex] && recommendedAge[recommendedAgeSelectIndex].replace('岁') || 3);
      param.minAge = age;
      param.maxAge = age;
    }

    API.searchCourseList(param)
      .then(res => {

        that.setData({
          courseList: res && res.items || []
        });
      })
  },

  // 获取分类课程数据
  getIndexCateCourse: function() {
    API.indexCateCourse({
    }).then(res => {//成功
      let data = res && res.list || [];

      this.setData({
        indexCateCourseData: data 
      });
    }).catch(err => {
    })
  },

  // 获取用户信息
  getinfoData: function () {
    API.getinfo({
      code: 0
    }).then(res => {//成功
      this.setData({
        userInfo: res || {},
        recommendedAgeSelectIndex: res.age - 3
      }, () => {
        this.searchCourseList();
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },

  createAgeList: function() {
    const ageList = [];

    for (let i = 4; i<=15; i++) {
      ageList.push(`${i}岁`)
    }

    ageList.unshift('3岁');
    
    this.setData({
      recommendedAge: ageList
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
          url: `/pages/course-menu/index?cateId=${typeid}`
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
      url: '/pages/explosion-more/index'
    })
  },
  //点击商品详情
  details: function (e) {
    wx.navigateTo({
      url: `/pages/course-detail/index?id=${e.currentTarget.dataset.id}`
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
      this.searchCourseList();
    })
  },
  // 上拉加载
  onReachBottom() {
    if(!this.data.isMore) {
      wx.showToast({//错误
        title: '没有更多数据了',
        icon: 'none',
        duration: 1000
      })
      return;
    }
    this.recommendData();
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
  },
  onPageScroll: function (e) {
     console.log(e.scrollTop)
     if(e.scrollTop >= 50){
         this.setData({
           'viewData.style': chageStyle
         })
       console.log(1111111111111)
     }else if(e.scrollTop <= 50){
      this.setData({
        'viewData.style': myStyle
      })

     }
  }
})

