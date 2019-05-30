// pages/erbao/erbao.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    talkList: [
      {
        num: 10,
        cont: '哇，哪里来的沙雕新闻？？',
        name: '滴答滴答—'
      },
      {
        num: 9,
        cont: '楼上说的对啊',
        name: '独孤求败'
      },
      {
        num: 8,
        cont: '我也想写新闻了，哈哈哈哈哈哈',
        name: '掉漆的标题'
      },
      {
        num: 7,
        cont: '抢沙发',
        name: 'no matter'
      },
      {
        num: 6,
        cont: '666',
        name: '打不过就装死'
      },
      {
        num: 5,
        cont: '楼主说得对',
        name: '岁月并非如歌'
      },
      {
        num: 4,
        cont: '啊啊啊啊啊啊啊啊啊啊',
        name: 'kk103'
      },
      {
        num: 3,
        cont: 'fghsfghsrthsfhsfthsfthbsfgbh',
        name: '饶心'
      },
      {
        num: 2,
        cont: '哈哈哈哈哈哈，笑死我了',
        name: '华丽的冒险'
      },
      {
        num: 1,
        cont: '沙发',
        name: '只对你有感觉'
      }
    ],
    concent: '',
    num: 0,
    userInfo: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.pageScrollTo({
      scrollTop: 0
    });
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        that.setData({
          userInfo: res.data,
          num: that.data.talkList.length + 1,
        })
      }
    })
  },
  //失去焦点时获取里面评论内容
  bindTextAreaBlur: function (e) {
    this.setData({
      concent: e.detail.value,
    })
  },
  fabiao: function (e) {
    if (this.data.concent.length != 0) {
      this.num++;
      this.data.talkList.unshift({
        num: this.data.num,
        cont: this.data.concent,
        name: this.data.userInfo.nickName
      });
      this.setData({
        talkList: this.data.talkList,
        num: this.data.num + 1,
        concent: ''
      })
    } else {
      wx.showToast({
        title: '发表内容不能为空',
        icon: 'none',
        duration: 2000
      });
    }
  }
})