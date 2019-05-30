// pages/chengyu/chengyu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cyInfo: {},
    loadtext: false,
    text: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  getInfo(e) {
    if (e.detail.value ) {
      let _this = this;
      _this.setData({
        loadtext: true,
        text: e.detail.value,
        cyInfo: {}
      })
      let word = encodeURIComponent(e.detail.value)
      wx.request({
        url: 'https://v.juhe.cn/chengyu/query?key=9b939f265072c9e6f89756c1ac62b01c&word=' + word,
        method: 'get',
        data: {
        },
        success(res) {
          if (res.data.error_code == 0) {
            let cyInfo = res.data.result
            _this.setData({
              cyInfo: cyInfo,
              loadtext: false,
            })
          } else {
            wx.showToast({
              title: res.data.reason,
              icon: 'none',
              duration: 2000
            });
            _this.setData({
              loadtext: false,
              text: '',
              cyInfo: {},
            })
          }
        },
        fail(err) {
          console.log('获取数据失败：' + err)
        }
      })

    }
  }

})