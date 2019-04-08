


Page({
  data:{
    userInfo: {},
    erbaoShowList: ['滋牙~'],
    erbaoShow: false,
    isUser: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this;
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          _this.getUserInfo()
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
        _this.setData({
          erbaoShowList: res.data.erbaoShowList, 
          erbaoShow: erbaoShow
        })
      }

    })
  },
  getUserInfo() {
    let _this = this;
    wx.getUserInfo({
      success: function (res) {
        wx.setStorage({
          key: 'userInfo',
          data: res.userInfo
        })
        _this.setData({
          userInfo: res.userInfo,
          isUser: true
        })
        _this.getShow()
      }
    });
  }  
  ,
  bindGetUserInfo(e) {
    this.getUserInfo()
  }
});