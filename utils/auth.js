

async function checkSession(){
  return new Promise((resolve, reject) => {
    wx.checkSession({
      success() {
        return resolve(true)
      },
      fail() {
        return resolve(false)
      }
    })
  })
}

// 检测登录状态，返回 true / false
async function checkHasLogined() {

  // return new Promise((resolve, reject) => {
    // try {
    //   const token = wx.getStorageSync('token')
    //   if (!token) {
    //     // return false
    //     resolve(false);
    //   }
    //   // const loggined = await checkSession()
    //   // if (!loggined) {
    //   //   wx.removeStorageSync('token')
    //   //   return false
    //   // }
    //   // return true
    //   resolve(true);
    // } catch(e) {
    //   reject(e);
    // }

    const token = wx.getStorageSync('token')
    if (!token) {
      return false
    }
    const loggined = await checkSession()
    if (!loggined) {
      wx.removeStorageSync('token')
      return false
    }
    return true
  // })
  
}

function loginOut(){
  wx.removeStorageSync('token')
  wx.removeStorageSync('uid')
}

// async function checkAndAuthorize (scope) {
//   return new Promise((resolve, reject) => {
//     wx.getSetting({
//       success(res) {
//         console.log(res);
//         if (!res.authSetting[scope]) {
//           wx.authorize({
//             scope: scope,
//             success() {
//               resolve() // 无返回参数
//             },
//             fail(e){
//               console.error(e)
//               wx.showModal({
//                 title: '无权操作',
//                 content: '需要获得您的授权',
//                 showCancel: false,
//                 confirmText: '立即授权',
//                 confirmColor: '#e64340',
//                 success(res) {
//                   wx.openSetting();
//                 },
//                 fail(e){
//                   console.error(e)
//                   reject(e)
//                 },
//               })
//             }
//           })
//         } else {
//           resolve() // 无返回参数
//         }
//       },
//       fail(e){
//         console.error(e)
//         reject(e)
//       }
//     })
//   })  
// }


module.exports = {
  checkHasLogined,
  loginOut
}
