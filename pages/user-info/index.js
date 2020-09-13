
//获取应用实例
const app = getApp()
const API = require('../../config/api');

const date = new Date()
const years = []
const months = [];
const days = [];
const hours = [];
const minutes = [];
const seconds = [];

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

for (let i = 0; i < 24; i++) {
  hours.push(i < 10 ? `0${i}` : i)
}

for (let i = 0; i < 60; i++) {
  minutes.push(i < 10 ? `0${i}` : i)
}

for (let i = 0; i < 60; i++) {
  seconds.push(i < 10 ? `0${i}` : i)
}

Page({
  data: {
    hidden: true, //头像弹窗
    namehidden: true, //修改姓名弹窗
    iphonehidden: true, //修改手机号弹窗
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    recommendedAge: [],
    recommendedAgeSelectIndex: 0,
    recommendedAgexb: [{key: '男', value: 1}, {key: '女', value: 2}],
    recommendedAgeSelectIndexxb: 0,
    phoneValue: '', // 默认手机号码
    nickNameValue: '', // 默认用户名称
    years,
    year: date.getFullYear(),
    months,
    hours,
    minutes,
    seconds,
    days,
    month: 1, // 默认第一月
    day: 1, // 默认第一天
    birthdayValue: [9999, 0, 0],
    birthdaySelectPopup: true, // 选择生日是否显示
  },
  //头像弹窗按钮
  clickImg: function (e) {
    this.setData({
      hidden: !this.data.hidden
    })
  },
  //姓名弹窗
  nameshow: function (e) {
    this.setData({
      namehidden: !this.data.namehidden
    })
  },
  //手机号弹窗
  iphoneshow: function (e) {
    this.setData({
      iphonehidden: !this.data.iphonehidden
    })
  },
  // 选择年龄
  recommendedAgeSelect(event) {
    this.setData({
      recommendedAgeSelectIndex: event.detail.value
    }, () => {
      console.log('event.detail.value', event.detail.value);
      
      if (event.detail.value !== undefined && event.detail.value !== null) {
        this.editUserInfo({
          edit_key: 'AGE',
          edit_val: event.detail.value
        });
      }
    })
  },
  // 选择性别
  recommendedAgeSelectxb(event) {
    const { infodetail, recommendedAgexb } = this.data;
    infodetail.sex = recommendedAgexb[event.detail.value].value
    this.setData({
      recommendedAgeSelectIndexxb: event.detail.value,
      infodetail,
    }, () => {
      this.editUserInfo({
        edit_key: 'SEX',
        edit_val: String(recommendedAgexb[event.detail.value].value)
      });
    })
  },
  onLoad: function () {
    this.getinfoData();
    this.createAgeList();
  },
  // 获取用户信息
  getinfoData: function () {
    API.getinfo({
      code: 0
    }).then(res => {//成功
      const { phone, nick_name, sex } = res || {};
      this.setData({
        infodetail: res,
        phoneValue: phone,
        nickNameValue: nick_name,
        recommendedAgeSelectIndexxb: sex-1
      });
    }).catch(err => {
      wx.showToast({//错误
        title: err,
        icon: 'none',
        duration: 1000
      })
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 昵称发生修改时事件
   * @date 2020-09-12
   * @returns {any}
   */
  nickNameInput: function(event) {
    this.setData({
      nickNameValue: event.detail.value
    })
  },
  /**
   * 手机号码发生修改时事件
   * @date 2020-09-12
   * @param {any} event
   * @returns {any}
   */
  phoneInput: function(event) {
    this.setData({
      phoneValue: event.detail.value
    })
  },
  nickNameConfirm: function() {
    const { infodetail, nickNameValue } = this.data;
    infodetail.nick_name = nickNameValue;
    this.setData({
      infodetail,
      namehidden: !this.data.namehidden
    }, () => {
      this.editUserInfo({
        edit_key: 'NICK_NAME',
        edit_val: nickNameValue
      });
    })
  },
  nickNameCancel: function() {
    this.setData({
      namehidden: !this.data.namehidden
    })
  },
  /**
   * 确认手机号修改
   * @date 2020-09-12
   * @returns {any}
   */
  phoneConfirm: function() {
    const { infodetail, phoneValue } = this.data;
    infodetail.phone = phoneValue;
    this.setData({
      infodetail,
      iphonehidden: !this.data.iphonehidden
    }, () => {
      this.editUserInfo({
        edit_key: 'PHONE',
        edit_val: phoneValue
      });
    })
  },
  /**
   * 取消手机号修改
   * @date 2020-09-12
   * @returns {any}
   */
  phoneCancel: function() {
    this.setData({
      iphonehidden: !this.data.iphonehidden,
      phoneValue: '',
    })
  },
  /**
   * 修改用户信息
   * @date 2020-09-12
   * @returns {any}
   */
  editUserInfo: function(params) {
    API.editInfoDetail(JSON.stringify(params))
      .then(res => {
        console.log('修改成功', res)
      })
      .catch(error => {
        console.log('修改失败', error)
      })

    // age: 0
    // amount: 0
    // birthday: ""
    // create_at: "2020-09-01 22:39:03"
    // head_img: "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJefEbeicz9b2EZOLbp5ZFKR8DA99IEa9iauIqyqufY9rxCRwJzWhGMyblrbBNNBuaScEKfYcAw0KhA/132"
    // invite_url: "https://dspfff.oss-cn-hangzhou.aliyuncs.com/22/WechatIMG203.png"
    // nick_name: "."
    // phone: "18868439499"
    // sex: 0
    // user_id: 13
    // v_amount: 0
  },

  /**
   * 创建年龄数据
   * @date 2020-09-06
   * @returns {any}
   */
  createAgeList: function() {
    const ageList = [];

    for (let i = 4; i<=15; i++) {
      ageList.push(`${i}岁`)
    }

    ageList.unshift('3岁以下');
    
    this.setData({
      recommendedAge: ageList
    })
  },
  /**
   * 生日发生修改
   * @date 2020-09-12
   * @returns {any}
   */
  babyBirthdySelect: function(e) {
    const val = e.detail.value;
    const { years, infodetail } = this.data;
    console.log('val', val)
    let year = years[val[0]];
    let month = months[val[1]];
    let day = days[val[2]];
    let hour = hours[val[3]];
    let minute = minutes[val[4]];
    let second = seconds[val[5]];
    let time = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
    infodetail.birthday = time
    this.setData({
      birthdayValue: e.detail.value,
      infodetail: infodetail
    })
  },
  /**
   * 选择生日
   * @date 2020-09-12
   * @returns {any}
   */
  birthdaySelect() {
    this.setData({
      birthdaySelectPopup: !this.data.birthdaySelectPopup
    })
  },
  /**
   * 生日选择取消
   * @date 2020-09-13
   * @returns {any}
   */
  babyBirthdyCancel() {
    this.setData({
      birthdaySelectPopup: !this.data.birthdaySelectPopup,
    })
  },
  /**
   * 生日选择确认
   * @date 2020-09-12
   * @returns {any}
   */
  babyBirthdyConfirm() {
    const { infodetail } = this.data;
    this.setData({
      birthdaySelectPopup: !this.data.birthdaySelectPopup,
    }, () => {
      this.editUserInfo({
        edit_key: 'BIRTHDAY',
        edit_val: infodetail.birthday
      });
    })
  },
  /**
   * 上传图片
   * @date 2020-09-12
   * @returns {any}
   */
  uploadImg() {
    const { infodetail } = this.data;
    var that = this;
    wx.chooseImage({  //从本地相册选择图片或使用相机拍照
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success:function(res){
        //前台显示
        infodetail.head_img = res.tempFilePaths[0]
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          infodetail
        }, () => {
          that.editUserInfo({
            edit_key: 'HEAD',
            edit_val: infodetail.head_img
          });
        })
      }
    })
  }
})
