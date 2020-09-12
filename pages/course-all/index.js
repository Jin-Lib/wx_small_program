//index.js
const API = require('../../config/api');

Page({
  data: {
    pagination: {
      page: 1,
      pageSize: 10
    },
    selectedKey: '0',
    cacheClassification: [], // 存储类目数据列表
    classification: [], // 类目数据列表
    classificationIndex: [], // 类目数据列表选项
    agePickerArray: [], // 年龄数据
    agePickerIndex: 0, // 年龄选择值

    courseList: []
  },
  selected: function (e) {
    this.setData({
      selectedKey: e.target.dataset.key
    }, () => {
      this.searchCourseList();
    });
  },
  onLoad: function () {
    // 获取类目数据
    this.getCourseCate();
    // 创建年龄数据
    this.createAgeList();

    this.searchCourseList();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 创建年龄数据
   * @date 2020-09-06
   * @returns {any}
   */
  createAgeList: function() {
    const ageList = [];

    for (let i = 4; i<=15; i++) {
      ageList.push(`${i}岁`)
    }

    ageList.unshift('3岁以下');
    
    this.setData({
      agePickerArray: ageList
    })
  },
  //点击商品详情
  details: function (e) {
    wx.navigateTo({
      url: `/pages/course-detail/index?id=${e.currentTarget.dataset.id}`
    })
  },
  /**
   * 课程分类
   * @date 2020-09-05
   * @param {any} event
   * @returns {any}
   */
  getCourseCate: function(event) {
    let that = this;

    API.getCourseCate()
      .then(res => {
        const list = res && res.list || [];

        this.setData({
          cacheClassification: list,
          classification: that.getClassificationColumnData(list, 0),
          classificationIndex: []
        })
      })
  },
  /**
   * 切换类目时事件
   * @date 2020-09-05
   * @param {any} event
   * @returns {any}
   */
  classificationChange: function(event) {
    this.setData({
      classificationIndex: event.detail.value
    })
  },

  // 搜索课程列表
  searchCourseList: function() {
    let that = this;
    let { pagination, selectedKey } = this.data;
    let param = {
      ...pagination,
      sort: selectedKey,
      // cateId: 
    };

    API.searchCourseList(param)
      .then(res => {

        that.setData({
          courseList: res && res.items || []
        });
      })
  },

  /**
   * 切换类目 第二列
   * @date 2020-09-06
   * @param {any} e
   * @returns {any}
   */
  classificationColumnChange: function(e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if (e.detail.column === 0) {
      this.setData({
        classification: this.getClassificationColumnData(this.data.cacheClassification, e.detail.value)
      })
    }
  },

  /**
   * 获取类目第二列数据
   * @date 2020-09-06
   * @param {any} list
   * @param {any} column
   * @returns {any}
   */
  getClassificationColumnData: function(list, column) {
    const result = [];
    if (list && Array.isArray(list) && list.length) {
      const result_1 = [];
      const result_2 = [];
      list.forEach(function(item) {
        result_1.push(item.title);
      })
      if (list[column].items && Array.isArray(list[column].items)) {
        list[column].items.forEach(function(item) {
          result_2.push(item.title)
        })
      }
      result.push(result_1, result_2)
    }
    return result;
  },

  /**
   * 修改年龄值
   * @date 2020-09-06
   * @param {any} e
   * @returns {any}
   */
  agePickerChange: function(e) {
    this.setData({
      agePickerIndex: e.detail.value
    })
  }
})
