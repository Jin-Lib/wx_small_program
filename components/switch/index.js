// pages/comment/switch/switch.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
 
  },
  /**
   * 样式隔离
   */
  options: {
    styleIsolation: 'isolated'
  },
  /**
   * 组件的初始数据
   */
  data: {
    swit: true,
  },

  onLoad: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 单选按钮
    switchTap: function() {
      let swit = this.data.swit
      // 点击按钮后 
      const animation = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      const anim = wx.createAnimation({
        duration: 500,
        timingFunction: 'ease',
      })
      this.animation = animation
      this.animation = anim
      if (swit) {
        animation.translateX(-27).step()
        anim.backgroundColor('#e0e4ed').step()
        this.setData({
          move: animation.export(),
          movebg: anim,
          swit: !swit
        })
      } else {
        animation.translateX(0).step()
        anim.backgroundColor('#fe6969').step()
        this.setData({
          move: animation.export(),
          movebg: anim,
          swit: !swit
        })
      }
    },
  }
})