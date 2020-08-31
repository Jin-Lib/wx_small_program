const request = require('../utils/request.js');
const host = 'http://qmx-api.defengvip.com';

const API =  {
  /**
   * ===================
   * 首页
   * ===================
   */
  /**
   * 获取banner
   * @param [number] type 1:首页
   */
  'getBanner': {
    url: `${host}/api/sys/banner`,
    method: 'POST'
  },


  /**
   * ======================
   * 用户模块
   * ======================
   */
  /**
   * 获取用户信息
   * @param 无
   */
  'getUserInfo': {
    url: `${host}/student/user/info`,
    method: 'POST'
  },


  /**
   * 登录接口
   * @param
   */
  'login': {
    url: `${host}/api/Login/Login`,
    method: 'POST'
  },

};

let API_RES = {};
Object.keys(API).forEach(key => {
  let item = API[key];
  const { url, method } = item;
  if(method === 'POST' || method === 'post' || !method) {
    API_RES[key] = (data = {}) => request._post(url, data);
  } else if(method === 'GET' || method === 'get') {
    API_RES[key] = (data = {}) => request._get(url, data);
  }
})

module.exports = API_RES;