


Page({
  data:{
    userInfo: {},
    erbaoShowList: ['滋牙~'],
    erbaoShow: false,
    newTitle: '',
    isUser: false,
    isCheck: true // checking 校验位
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    let _this = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，提取信息
          wx.getStorage({
            key: 'userInfo',
            success(res) {
              console.log(res.data)
              _this.setData({
                userInfo: res.data,
                isUser: true
              }, () => {
                _this.getShow()
              })
            }
          })
        }
      }
    })
  },
  getShow() {
    let _this = this;
    wx.request({
      url: 'https://gitee.com/diaoqi/wxapp/raw/master/index-show.json',
      success(res){
        let erbaoShow = false;
        if (res.data.erbaoShowAll ) {
          erbaoShow = true
        } else {
          if (res.data.erbaoShowList.indexOf(_this.data.userInfo.nickName) >= 0) {
              erbaoShow = true
          }
        }
        let newTitle = ''
        if ( res.data.isCheck == false) {
          newTitle = '意新头条新闻'
        }
        _this.setData({
          erbaoShowList: res.data.erbaoShowList, 
          erbaoShow: erbaoShow,
          isCheck: res.data.isCheck,
          newTitle: newTitle
        },() => {
          wx.hideLoading()
        })
      }

    })
  },
  navigate(e) {
    console.log('跳转')
    wx.navigateTo({
      url: '../new/new?isCheck=' + this.data.isCheck,
    })
  },
  bindGetUserInfo(e) {
    wx.setStorage({
      key: 'userInfo',
      data: e.detail.userInfo
    })
    _this.setData({
      userInfo: e.detail.userInfo,
      isUser: true
    })
    console.log(e.detail.userInfo)
    _this.getShow()
  }
});