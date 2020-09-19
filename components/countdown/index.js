var timer = 0;
var interval = 1000;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    target: {
      type: String,
    },
    format: {
      type: Function,
      default: null
    }
  },

  lifetimes: {
    attached() {
      //组件创建时
      this.setData({
        lastTime: this.initTime(this.properties).lastTime,  //根据 target 初始化组件的lastTime属性
      }, () => {
        //开启定时器
        this.tick();
        //判断是否有format属性 如果设置按照自定义format处理页面上显示的时间 没有设置按照默认的格式处理
        if (typeof this.properties.format === 'object') {
          this.defaultFormat(this.data.lastTime)
        }
      })
    },

    detached() {
      //组件销毁时清除定时器 防止爆栈
      clearTimeout(timer);
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    d: 0, //天
    h: 0, //时
    m: 0, //分
    s: 0, //秒
    result: '',  //自定义格式返回页面显示结果
    lastTime:''  //倒计时的时间错
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //默认处理时间格式
    defaultFormat: function(time) {
      const day = 24 * 60 * 60 * 1000
      const hours = 60 * 60 * 1000;
      const minutes = 60 * 1000;

      const d = Math.floor(time / day);
      const h = Math.floor((time - d * day) / hours);
      const m = Math.floor((time - d * day - h * hours) / minutes);
      const s = Math.floor((time - d * day - h * hours - m * minutes) / 1000);
      this.setData({
        d,
        h,
        m,
        s
      })
    },

    //定时事件
    tick: function() {
      let {
        lastTime
      } = this.data;

      timer = setTimeout(() => {
        if (lastTime < interval) {
          clearTimeout(timer);
          this.setData({
              lastTime: 0,
              result: ''
            },
            () => {
              this.defaultFormat(lastTime)
              if (this.onEnd) {
                this.onEnd();
              }
            }
          );
        } else {
          lastTime -= interval;
          this.setData({
              lastTime,
              result: this.properties.format ? this.properties.format(lastTime) : ''
            },
            () => {
              this.defaultFormat(lastTime)
              this.tick();
            }
          );
        }
      }, interval);
    },

    //初始化时间
    initTime: function(properties) {
      let lastTime = 0;
      let targetTime = 0;
      try {
        if (Object.prototype.toString.call(properties.target) === '[object Date]') {
          targetTime = Number(properties.target).getTime();
        } else {
          targetTime = new Date(Number(properties.target)).getTime();
        }
      } catch (e) {
        throw new Error('invalid target properties', e);
      }

      lastTime = targetTime - new Date().getTime();
      return {
        lastTime: lastTime < 0 ? 0 : lastTime,
      };
    },
    //时间结束回调事件
    onEnd: function() {
      this.triggerEvent('onEnd');
    }
  }
})