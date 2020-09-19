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

  // 首页类目
  getType: {
    url: `${host}/api/sys/getType`,
    method: 'GET'
  },

  // 限时爆款
  activity: {
    url: `${host}/api/Course/activity`,
    method: 'POST'
  },

  // 首页分类数据
  indexCateCourse: {
    url: `${host}/api/course/indexCateCourse`,
    method: 'GET'
  },

  /**
   * ======================
   * 用户模块
   * ======================
   */

  /**
   * 登录接口
   * @param
   */
  'login': {
    url: `${host}/api/Login/Login`,
    method: 'POST'
  },

  // 意见反馈
  feedback: {
    url: `${host}/api/user/feedback`,
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

  // 课程跑马灯
  'broadcast': {
    url: `${host}/api/course/broadcast`,
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

  // 支付
  pay: {
    url: `${host}/api/order/pay`,
    method: 'GET'
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

  'groupInfo': {
    url: `${host}/api/order/groupInfo`,
    method: 'GET'
  },

  // 根据分类id获取课程
  'getCourseByCate': {
    url: `${host}/api/course/getCourseByCate`,
    method: 'GET'
  },

  /**
   * 所有课程
   */
  'searchCourseList': {
    url: `${host}/api/course/courseList`,
    method: 'GET'
  },

  // 推荐
  recommend: {
    url: `${host}/api/course/recommend`,
    method: 'GET'
  },

  // 绑定用户手机号
  'bindUserPhone': {
    url: `${host}/api/user/bind`,
    method: 'POST'
  },

  // ================ 合伙人接口写下面 ==================

  // 合伙人详情
  getPartnerInfo: {
    url: `${host}/api/user/partnerInfo`,
    method: 'POST'
  },

  // 合伙人收入详情
  getPartnerAmountDetail: {
    url: `${host}/api/user/partnerAmountDetail`,
    method: 'POST'
  },

  // 合伙人金额数据
  getPartnerAmount: {
    url: `${host}/api/user/partnerAmount`,
    method: 'POST'
  },

  // 用户团队合伙人
  getPartnerCount: {
    url: `${host}/api/team/partnerCount`,
    method: 'POST'
  },
  // 临时粉丝
  shortFansList: {
    url: `${host}/api/Team/shortFansList`,
    method: 'POST'
  },

  // 正式粉丝
  fansList: {
    url: `${host}/api/Team/fansList`,
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