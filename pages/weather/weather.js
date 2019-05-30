// pages/weather.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    weatherInfo: {},
    futureList: {},
    cityList: ['沈阳市', '北京市', '上海市', '深圳市', '杭州市', '天津市', '南京市', '鞍山市', '武汉市', '成都市'],
    selectCity: 0,
    futureList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    getWeather()
  },
  getWeather() {
    let _this = this
    let cityList = this.data.cityList;
    let selectCity = this.data.selectCity;
    let city = cityList[selectCity].slice(0, cityList[selectCity].length - 1)
    wx.request({
      url: 'https://apis.juhe.cn/simpleWeather/query',
      data: {
        key: '6686c27e91ee031325039802a38148a6',
        city: city
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        if (res.data.error_code == 0) {
          let weatherInfo = res.data.result.realtime;
          let futureList = res.data.result.future;
          futureList.forEach((item, index) => {
            let temperature = item.temperature.slice(0, item.temperature.length - 1)
            temperature = temperature.split('/');
            item.temperature = temperature;
            let date = item.date;
            date = date.split('-');
            item.date = date;
          })
          _this.setData({
            weatherInfo: weatherInfo,
            futureList: futureList
          })
        } else {
          wx.showToast({
            title: res.data.reason,
            icon: 'none',
            duration: 2000
          });
          _this.setData({
            weatherInfo: {},
            futureList: []
          })
          
        }
      },
      fail(err) {
        console.log('获取天气失败：' + err)
      }
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      selectCity: e.detail.value
    });
    this.getWeather()
  },
})