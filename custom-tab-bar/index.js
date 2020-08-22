const app = getApp();

Component({
  options: { addGlobalClass: true },
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#56a59f",
    list: [{
      pagePath: "/pages/mall/index",
      iconPath: "/resource/nav/home.png",
      selectedIconPath: "/resource/nav/home_active.png",
      text: "购课商城",
      isSpecial: false
    },
    {
      pagePath: "/pages/course/index",
      iconPath: "/resource/nav/center.png",
      selectedIconPath: "/resource/nav/center_active.png",
      text: "我的课堂",
      isSpecial: false
    },
    {
      pagePath: "/pages/money/index",
      iconPath: "/resource/nav/address.png",
      selectedIconPath: "/resource/nav/address_active.png",
      text: "赚奖学金",
      isSpecial: false

    },
    {
      pagePath: "/pages/user/index",
      iconPath: "/resource/nav/my.png",
      selectedIconPath: "/resource/nav/my_active.png",
      text: "个人中心",
      isSpecial: false
    }],
    //适配IphoneX的屏幕底部横线
    isIphoneX: app.globalData.isIphoneX
  },
  attached() {},
  methods: {
    switchTab(e) {
      console.log(e);
      const dataset = e.currentTarget.dataset
      const path = dataset.path
      const index = dataset.index
      //如果是特殊跳转界面
      if (this.data.list[index].isSpecial) {
        wx.navigateTo({
          url: path
        })
      } else {
        //正常的tabbar切换界面
        wx.switchTab({
          url: path
        });
        console.log(index, path);
        this.setData({
          selected: index
        })
      }
    }
  }
})