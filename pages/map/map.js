Page({
  data: {
    scale: 16,
    latitude: 0,
    longitude: 0
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
    this.getMyLocation()
  },
  getMyLocation: function () {
    let _this = this;
    wx.getLocation({
      type: 'wgs84',
      success(res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
  getCenterLocation(){
  },
  changeView(e) {
    let _this = this;
    let item = e.currentTarget.dataset.bean;
    let num = item == 1 ? 1 : -1;
    num = this.data.scale + num
    if (4 < num && num < 19) {
      this.mapCtx.getCenterLocation({
        success(res) {
          _this.setData({
            latitude: res.latitude,
            longitude: res.longitude,
            scale: num
          })
        }
      })
    }
  }
})
