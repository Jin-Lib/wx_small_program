// components/scrollToTop/scrollToTop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isTopBtnShow: {
      type: Boolean,
      default: false,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 滚动到顶部
     * @date 2020-09-04
     * @returns {any}
     */
    scrollToTop: function() {
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，暂无法使用该功能，请升级后重试。'
        })
      }
    }
  },

  
})
