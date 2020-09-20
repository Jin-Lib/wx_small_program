//index.js
//获取应用实例
const app = getApp()
const API = require('../../config/api');
const Auth = require('../../utils/auth');

Page({
  data: {
    hiddenweek:false,
    hiddenrule:true,
    hiddenshare: true, //分享弹窗
    selected: true,

    // 我的课程信息
    courseData: [],
    userInfo: {},
    
    wxlogin: true,
  },
  
  //分享按钮
  showshare: function (e) {
    this.setData({
      hiddenshare: !this.data.hiddenshare
    })
  },
  //课程详情
  details: function (e) {
    wx.navigateTo({
      url: `/pages/course-detail/index?id=${e.currentTarget.dataset.id}`
    })
  },
  showrule: function (e) {
    this.setData({
      hiddenrule: !this.data.hiddenrule
    })
  },
  showweek: function (e) {
    this.setData({
      hiddenweek: !this.data.hiddenweek
    })
  },
  onLoad: function () {
    
  },
  //点击累计奖学金收益
  income: function (event) {
    wx.navigateTo({
      url: '/pages/user-bonus-income/index'
    })
  },
  //点击提现
  extract: function (event) {
    wx.navigateTo({
      url: '/pages/user-extract/index'
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }

    this.isLogin(this);

  },

  // 是否登录
  isLogin: async (that) => {
    let login = await Auth.isLogin();

    that.setData({
      wxlogin: login
    }, () => {
      login && that.initData();
    });
  },

  initData: function() {
    // 获取我的课程列表
    this.getorderData("4");
    this.getInfoData();
  },


  // 获取订单信息
  getorderData: function (type) {
    wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
      title: '加载中',
      icon: 'loading',
    });
    API.getorder({
      type,
    }).then(res => {//成功
      wx.hideLoading();

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
      wx.hideLoading();
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },

  /**
   * 获取当前用户个人资料
   * @date 2020-09-14
   * @returns {any}
   */
  getInfoData: function () {
    API.getinfo({
      code: 0
    }).then(res => {//成功
      console.log('res', res)
      
      this.setData({
        userInfo: res
      });
    })
  },

  getUserInfoDetail: function() {
    this.setData({
      wxlogin: true
    });
    this.initData();
  },
  

  // 分享
  onShareAppMessage: function(res) {
    const { id, title, img } = res && res.target && res.target.dataset || {};

    return {
      title: title,
      path: `/pages/course-detail/index?id=${id}&userId=${this.data.userInfo.user_id}`,
      imageUrl: img,
      desc: ``,
      // 
      success: (res) => {
      },
      fail: (res) => {
      }
    };
  },


  // 是否登录
  // isLogin: function() {
  //   // 是否登录
  //   Auth.checkHasLogined()
  //     .then(res => {
  //       if(res) {
  //         this.setData({
  //           wxlogin: true
  //         }, () => {
  //           // 用户登录之后查看当前个人资料是否填写
  //           this.getInfoData()
  //         });
  //       } else {
  //         this.setData({
  //           wxlogin: false
  //         });
  //       }
  //     }).catch(e => {
  //       this.setData({
  //         wxlogin: false
  //       });
  //     })
  // },



})
