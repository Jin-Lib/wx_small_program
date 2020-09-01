/**
 * 请求封装
 */
const request = ({ url, data = {}, method = "GET", isLoading = false } = {}) => {
  // 默认值 ,另一种是 "content-type": "application/x-www-form-urlencoded"
  let contentType = 'application/json';
  // 耗时计算
  let timeStart = Date.now();

  // 是否loading
  isLoading && wx.showLoading({
    title: '请求中，请耐心等待..'
  });

  return new Promise((resolve, reject) => {
    let token = wx.getStorageSync('token');
    let header = {
      'Content-Type': contentType,
      'ua': '1.0.0;API1;student;1.0.0',
    };
    if(token) {
      header.token = token;
    } else {
      if(data && data.noLogin) {
      } else {
        toLogin();
      }
    }

    wx.request({
      url: url,
      data: data,
      method: method,
      header: header,
      success: (res) => {
        // console.log(`耗时：${Date.now() - timeStart}`);
        // console.log('===============================================================================================')
        // console.log('==    接口地址：' + url)
        // console.log('==    接口参数：' + JSON.stringify(data))
        // console.log('==    请求类型：' + method)
        // console.log("==    接口状态：" + res.statusCode);
        // console.log('===============================================================================================')
        if (res.statusCode == 200) {
          //请求正常200
          let result = res.data;

          if (result.code === 0) {
            //正常
            resolve(result.data);
          } else if(result.code == 401 || result.code == 400) {
            //错误
            try {
              wx.removeStorageSync('token')
              toLogin();
            } catch (e) {
            }
            reject('登录已过期')
          } else {
            reject(result.msg);
          }
        } else if (res.statusCode == 401 && res.statusCode == 400) {
          //此处验证了token的登录失效，如果不需要，可以去掉。
          //未登录，跳转登录界面
          try {
            wx.removeStorageSync('token');
            toLogin();
          } catch (e) {
          }
          // wx.showModal({
          //   title: '提示',
          //   content: '登录已过期，请立即登录，否则无法正常使用',
          //   success(res) {
          //     /**
          //     if (res.confirm) {
          //       console.log('用户点击确定')
          //       wx.navigateTo({
          //         url: '/pages/login/login?toPageUrl=401',
          //       })
          //     } else if (res.cancel) {
          //       console.log('用户点击取消')
          //     }
          //     */
          //   }
          // })
          reject("登录已过期")
        } else {
          //请求失败
          reject("请求失败：" + res.statusCode)
        }
      },
      complete: () => {
        isLoading && wx.hideLoading();
      },
      fail: (err) => {
        //服务器连接异常
        console.log('===============================================================================================')
        console.log('==    接口地址：' + url)
        console.log('==    接口参数：' + JSON.stringify(data))
        console.log('==    请求类型：' + method)
        console.log("==    服务器连接异常")
        console.log('===============================================================================================')
        reject("服务器连接异常，请检查网络再试")
      }
    })
  });
};

/**
 * GET请求封装
 */
const _get = (url, data = {}, isLoading) => {
  return request({
      url,
      data,
      method: 'GET',
      isLoading
  })
}

/**
 * POST请求封装
 */
const _post = (url, data = {}, isLoading) => {
  return request({
      url,
      data,
      method: 'POST',
      isLoading
  })
}

const toLogin = () => {
  var pages = getCurrentPages();
  
  if(pages && pages[pages.length - 1].route.indexOf('login') === -1) {
    /**
    wx.reLaunch({
      url: '/pages/login/index'
    });
     */
  }
}

module.exports = {
  request,
  _get,
  _post
}