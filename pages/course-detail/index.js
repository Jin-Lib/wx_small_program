//index.js
//获取应用实例
const app = getApp()
const API = require('../../config/api');

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    hiddenrule: true, //服务说明弹窗
    hiddengroup: true,  //拼团规则弹窗
    hiddensingle: true, //单独购买弹窗
    hiddenpintuan: true, //拼团购买弹窗
    hiddencancelpay: true, //确认取消支付弹窗
    hiddencancelpayd: true, //单购确认取消支付弹窗
    tabList: ['详情', '目录', '评价', '推荐'], // tab 分类
    currentTabSub: 0, // 记录当前tab下标
    isTopBtnShow: false, // 是否展示返回顶部按钮
    coursedetail: {},

    // 跑马灯
    broadcastData: [],
    // 推荐
    recommendCourseData: [],

    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
  },

  onLoad: function (options) {
    this.getdetailData(options.id);
    this.getBroadcast();
    this.recommendData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  },

  // 跑马灯
  getBroadcast: function() {
    API.broadcast({
    }).then(res => {//成功

      this.setData({
        broadcastData: res && res.list || []
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },

  // 获取课程信息
  getdetailData: function (id) {
    let that = this;
    API.getweek({
      id
    }).then(res => {//成功
      //const { rows } = res || {};

      if(res && res.isBuy) {
        wx.getSystemInfo({
          success: function (res) {
            that.setData({
              winWidth: res.windowWidth,
              winHeight: res.windowHeight
            });
          }
        });
      }

      this.setData({
        coursedetail: res
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },

  // 推荐
  recommendData: function() {
    API.recommend({
      scene: 'detail',
      page: 1,
      pageSize: 6
    }).then(res => {//成功
      this.setData({
        recommendCourseData: res && res.items || []
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },

  // 下单
  getcreateData: function () {
    let that = this;
    API.getcreate({
      courseId: this.data.coursedetail.id
    }).then(res => {//成功
      console.log(res);
      //const { rows } = res || {};
      wx.requestPayment(
        {
          'timeStamp': res.timeStamp,
          'nonceStr': res.nonceStr,
          'package': res.package,
          'signType': res.signType,
          'paySign': res.paySign,
          'success': function (res) {
            console.log(res);
            that.setData({
              hiddensingle: false
            });
            wx.showToast({
              title: '购买成功',
              icon: 'none',
              duration: 1000
            })
            wx.switchTab({
              url: '/pages/course/index'
            })
            
           },
          'fail': function (res) { },
          'complete': function (res) { }
        })
      this.setData({
        coursecreate: res,
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },
  onReady() {
    this.setData({
      container: () => wx.createSelectorQuery().select('#navigation-wrap')
    }, () => {
      console.log(this.data.container())
    })
  },

  //点击商品详情
  details: function (e) {
    wx.navigateTo({
      url: `/pages/course-detail/index?id=${e.currentTarget.dataset.id}`
    })
  },
  //服务说明按钮
  showrule: function (e) {
    this.setData({
      hiddenrule: !this.data.hiddenrule
    })
  },
  //拼团规则按钮
  showgroup: function (e) {
    this.setData({
      hiddengroup: !this.data.hiddengroup
    })
  },
  //单独购买弹窗按钮
  showsingled: function (e) {
    this.setData({
      hiddensingle: !this.data.hiddensingle
    })
  },
  //单购关闭弹窗购买按钮
  showsinglegb: function (e) {
    this.setData({
      hiddencancelpayd: !this.data.hiddencancelpayd
    })
  },
  //拼团购买弹窗按钮
  showpintuan: function (e) {
    this.setData({
      hiddenpintuan: !this.data.hiddenpintuan,
    })
  },
  //拼团关闭弹窗按钮
  showpintuangb: function (e) {
    this.setData({
      hiddencancelpay: !this.data.hiddencancelpay
    })
  }, 
  //拼团确定离开按钮
  showcancelpay: function (e) {
    this.setData({
      hiddencancelpay: !this.data.hiddencancelpay,
      hiddenpintuan: !this.data.hiddenpintuan,
    })
  },
  //拼团继续支付按钮
  showcarry: function (e) {
    this.setData({
      hiddencancelpay: !this.data.hiddencancelpay
    })
  },
  //单购确定离开按钮
  showcancelpayd: function (e) {
    this.setData({
      hiddencancelpayd: !this.data.hiddencancelpayd,
      hiddensingle: !this.data.hiddensingle,
    })
  },
  //单购继续支付按钮
  showcarryd: function (e) {
    this.setData({
      hiddencancelpayd: !this.data.hiddencancelpayd
    })
  },
  //点击单购支付按钮
  single_pay: function (event) {
    this.getcreateData();
    // wx.navigateTo({
    //   url: '/pages/course-play/index'
    // })
  },
  //点击团购支付按钮
  spell_pay: function (event) {
    // wx.navigateTo({
    //   url: `/pages/course-share/index?groupId=2&id=${this.data.coursedetail.id}`
    // })
    // return;
    let that = this;
    API.getcreate({
      courseId: this.data.coursedetail.id,
      isGroup: 1
    }).then(res => {//成功
      console.log(res);
      //const { rows } = res || {};
      wx.requestPayment(
        {
          'timeStamp': res.timeStamp,
          'nonceStr': res.nonceStr,
          'package': res.package,
          'signType': res.signType,
          'paySign': res.paySign,
          'success': function (res) {
            that.setData({
              hiddenpintuan: false
            });
            wx.showToast({
              title: '创建拼团成功',
              icon: 'none',
              duration: 1000
            })
            wx.navigateTo({
              url: `/pages/course-share/index?groupId=${res.groupId}&id=${that.data.coursedetail.id}`
            })
            
           },
          'fail': function (res) { },
          'complete': function (res) { }
        })
      this.setData({
        coursecreate: res,
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
    
  },
  // tab 切换
  tabChange: function(event) {
    console.log(event.currentTarget.dataset.sub)
    this.setData({
      currentTabSub: event.currentTarget.dataset.sub
    })
  },
  /**
   * 监听页面滚动事件
   * @date 2020-09-04
   * @param {any} e
   * @returns {any}
   */
  onPageScroll: function(e) {
    this.setData({
      isTopBtnShow: e.scrollTop > 100
    })
  },


  // 购买课程
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
})
