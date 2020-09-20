const app = getApp()
const Auth = require('../../utils/auth');
const API = require('../../config/api.js');

Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wxlogin: true,
    userInfoFinish: false,
    userInfo: {}
  },

  onLoad: function () {
    this.getInfoData();
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
  // getUserInfo: function() {
  //   let that = this;
  //   API.getinfo()
  //     .then(data => {
  //       that.setData({
  //         userInfo: data,
  //       });
  //     }).catch(err => {
  //       console.log('err', err)
  //       if(err == '登录已过期') {
  //         that.setData({
  //           wxlogin: false
  //         });
  //       }
  //     });
  // },

  // 是否登录
  isLogin: function() {
    // 是否登录
    Auth.checkHasLogined()
      .then(res => {
        if(res) {
          this.setData({
            wxlogin: true
          }, () => {
            // 用户登录之后查看当前个人资料是否填写
            this.getInfoData()
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

  /**
   * 获取当前用户个人资料
   * @date 2020-09-14
   * @returns {any}
   */
  getInfoData: function () {
    API.getinfo({
      code: 0
    }).then(res => {//成功
      const {
        nick_name, head_img, birthday,
        age, sex, phone
      } = res;
      if (nick_name && head_img && birthday && age && sex && phone) {
        this.setData({
          userInfoFinish: nick_name,
          userInfo: res,
        })
      }
    })
  },

  getUserInfoDetail: function() {
    this.setData({
      wxlogin: true
    });
    this.getInfoData();
  },
  //点击进入合伙人
  partner: function (event) {
    wx.navigateTo({
      url: '/pages/partner/partner-mall/index'
    })
  },
  //点击修改信息
  information: function (event) {
    if(!this.data.wxlogin) {
      this.setData({
        wxlogin: false
      });
      return;
    }

    wx.navigateTo({
      url: '/pages/user-info/index'
    })
  },
  //点击学分
  credit: function (event) {
    if(!this.data.wxlogin) {
      this.setData({
        wxlogin: false
      });
      return;
    }
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
    if(!this.data.wxlogin) {
      this.setData({
        wxlogin: false
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/user-order/index'
    })
  },
  //点击意见反馈
  feedback: function (event) {
    if(!this.data.wxlogin) {
      this.setData({
        wxlogin: false
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/user-feedback/index'
    })
  },
  //点击咨询客服
  advisory: function (event) {
    if(!this.data.wxlogin) {
      this.setData({
        wxlogin: false
      });
      return;
    }
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },

  handleContact: function(e) {
    console.log(e);
  }

})
