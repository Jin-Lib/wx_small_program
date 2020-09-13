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

  /**
   * ===================
   * 课程详情
   * ===================
   */
  'getweek': {
    url: `${host}/api/course/detail`,
    method: 'GET'
  },
  /**
   * ===================
   * 下单
   * ===================
   */
  'getcreate': {
    url: `${host}/api/order/create`,
    method: 'POST'
  },
  /**
   * ===================
   * 用户详情
   * ===================
   */
  'getinfo': {
    url: `${host}/api/user/info`,
    method: 'POST'
  },
  /**
   * ===================
   * 修改用户详情
   * ===================
   */
  'editInfoDetail': {
    url: `${host}/api/user/editDetail`,
    method: 'POST'
  },
  /**
   * ===================
   * 订单
   * ===================
   */
  'getorder': {
    url: `${host}/api/Order/orderList`,
    method: 'POST'
  },
  /**
   * ===================
   * 课程 分类
   * ===================
   */
  'getCourseCate': {
    url: `${host}/api/course/cate`,
    method: 'GET'
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