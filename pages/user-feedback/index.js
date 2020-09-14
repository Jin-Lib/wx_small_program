//index.js
const API = require('../../config/api');

Page({
  data: {
    phone: '',
    name: '',
    content: 0,
    max: 300,
    hidden: true, //意见反馈提交弹窗
  },
  // 文本框字数限制
  limit: function (e) {
    var value = e.detail.value;
    var length = parseInt(value.length);
    if (length > this.data.max) {
      return;
    }
    this.setData({
      content: value
    });
  },
  onNameInput: function(e) {
    this.setData({
      name: e.detail.value
    });
  },
  onPhoneInput: function(e) {
    this.setData({
      phone: e.detail.value
    });
  },
  //完成按钮
  carry: function (e) {
      wx.navigateBack({
        delta: 1
      }) 
  },
  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  submitFeedback: function() {
    const { name, phone, content } = this.data;

    if(!content) {
      wx.showToast({
        title: '请输入内容',
        icon: "none"
      });
      return;
    }

    if(!name) {
      wx.showToast({
        title: '请输入姓名',
        icon: "none"
      });
      return;
    }
    if(!phone) {
      wx.showToast({
        title: '请输入手机号',
        icon: "none"
      });
      return;
    }

    API.feedback({
      content,
      real_name: name,
      phone
    }).then(res => {//成功
      this.setData({
        hidden: !this.data.hidden
      })
    }).catch(err => {
    })
  }
})
