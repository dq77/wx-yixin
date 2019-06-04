// pages/new/new.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCheck: 'true',
    newInfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let isCheck = options.isCheck || 'true'
    // let isCheck = 'false'   // 调试留用
    wx.showLoading({
      title: '加载中',
    })
    this.setData({
      isCheck: isCheck,
    })
    if ( isCheck == 'false' ) {
      this.getInfo()
    } else {
      wx.hideLoading()
    }
  },
  getInfo() {
    let _this = this
      wx.request({
        url: 'https://v.juhe.cn/toutiao/index',
        method: 'get',
        data: {
          key: '6b7a460bd3c3461fff4bd2b2fc1c1f961'
        },
        success(res) {
          // if (res.data.error_code == 0) {
          //   let newInfo = res.data.result.data
          //   _this.setData({
          //     newInfo: newInfo,
          //   })
          // } else {
          //   wx.showToast({
          //     title: res.data.reason,
          //     icon: 'none',
          //     duration: 2000
          //   });
          //   _this.setData({
          //     newInfo: [],
          //   }, () => {
          //     wx.hideLoading()
          //   })
          // }
          _this.setData({
            newInfo: [
                  {
                    "uniquekey": "1d8ba0d09836645d9b83ebe08158dee5",
                    "title": "上海石油油库码头举行应急演练 模拟“险情”20分钟处理完毕",
                    "date": "2019-06-04 18:18",
                    "category": "头条",
                    "author_name": "中国新闻网",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604181807755.html",
                    "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/20190604181807_9aa50041d713ef05592a3e59d17bce07_1_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/20190604181807_9aa50041d713ef05592a3e59d17bce07_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/20190604181807_9aa50041d713ef05592a3e59d17bce07_3_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "fe55711327f3a0be81d978f653df2acf",
                    "title": "林心如一家出游，43岁的她逆生长，老公镜头下的她颜值爆表",
                    "date": "2019-06-04 18:15",
                    "category": "头条",
                    "author_name": "光明网",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604181546248.html",
                    "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20190604\/20190604181546_6de1b1143c6ac8853b12e5b15c4f9f47_4_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/02imgmini.eastday.com\/mobile\/20190604\/20190604181546_6de1b1143c6ac8853b12e5b15c4f9f47_3_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/02imgmini.eastday.com\/mobile\/20190604\/20190604181546_6de1b1143c6ac8853b12e5b15c4f9f47_2_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "30f13b90b95a463d7c575d95f8899168",
                    "title": "粽叶飘香，这个端午我们在军营一起过……",
                    "date": "2019-06-04 18:13",
                    "category": "头条",
                    "author_name": "新华网",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604181329166.html",
                    "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604181329_f0cf03085e665f85687f8851aa41e55e_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604181329_f0cf03085e665f85687f8851aa41e55e_1_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604181329_f0cf03085e665f85687f8851aa41e55e_3_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "7aef36bffc1ef429e2b936112396de81",
                    "title": "江西抚州：200余名大学生预征对象抢先体验军旅生活",
                    "date": "2019-06-04 18:13",
                    "category": "头条",
                    "author_name": "新华网",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604181329006.html",
                    "thumbnail_pic_s": "http:\/\/02imgmini.eastday.com\/mobile\/20190604\/20190604181329_8e5abf787c4d3bc95e3a0ce7b0f2bb69_4_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/02imgmini.eastday.com\/mobile\/20190604\/20190604181329_8e5abf787c4d3bc95e3a0ce7b0f2bb69_5_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/02imgmini.eastday.com\/mobile\/20190604\/20190604181329_8e5abf787c4d3bc95e3a0ce7b0f2bb69_1_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "ee9b3a25e7b0190d3126a221ea035754",
                    "title": "最省油的SUV之一，百公里五升，大天窗还配LED大灯，买吗？",
                    "date": "2019-06-04 18:07",
                    "category": "头条",
                    "author_name": "汽车情报",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604180728248.html",
                    "thumbnail_pic_s": "http:\/\/06imgmini.eastday.com\/mobile\/20190604\/2019060418_1d580d2ef2074e25ac372389ea3ed90e_8979_cover_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/06imgmini.eastday.com\/mobile\/20190604\/2019060418_e1c03b13c53a4981a9030a0c25540434_3834_cover_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/06imgmini.eastday.com\/mobile\/20190604\/2019060418_6fd6945403bf4adb82e64f755e080af3_2576_cover_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "a272fb9d662f2e794e9f09036a116e60",
                    "title": "不仅仅是勇士有伤，猛龙伤势更为惨烈，洛瑞韧带撕裂小卡左膝疼痛",
                    "date": "2019-06-04 18:07",
                    "category": "头条",
                    "author_name": "残暴的阿达西爱篮球",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604180715708.html",
                    "thumbnail_pic_s": "http:\/\/09imgmini.eastday.com\/mobile\/20190604\/2019060418_3261fb9cbe384e018271a0eb2a9b31b5_6677_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/09imgmini.eastday.com\/mobile\/20190604\/2019060418_5fe4cfeae2dd45b6bb9a4296ae2edb40_7829_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/09imgmini.eastday.com\/mobile\/20190604\/2019060418_5236ad26afd04270860a63cd58722f50_9622_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "1378636e7a0976ce954ae528ae1f0954",
                    "title": "印度在边境扔下一颗炸弹，重500公斤且精确制导，巴铁怡然不惧",
                    "date": "2019-06-04 18:04",
                    "category": "头条",
                    "author_name": "东方头条 谷火平",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604180410918.html",
                    "thumbnail_pic_s": "http:\/\/01imgmini.eastday.com\/mobile\/20190604\/2019060418_7499480f0fe24a3f9228f128ab00e1d1_3207_cover_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/01imgmini.eastday.com\/mobile\/20190604\/2019060418_84b5ee96992a40d0af61512b7bb5e98b_9097_cover_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/01imgmini.eastday.com\/mobile\/20190604\/2019060418_b8e2d3813fbf4077a0b3970050c17063_3121_cover_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "b14dccb110d37fdf225dde3cb6e1f35f",
                    "title": "俄罗斯都做不到！阿联酋联合欧洲小国改进苏联火炮，实现高性价比",
                    "date": "2019-06-04 18:00",
                    "category": "头条",
                    "author_name": "东方头条 123军情观察室",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604180002968.html",
                    "thumbnail_pic_s": "http:\/\/01imgmini.eastday.com\/mobile\/20190604\/2019060417_deb3f7bc092e4a7f889423899e0492f9_0226_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/01imgmini.eastday.com\/mobile\/20190604\/2019060417_a01a5e01c4ec4639945184d87c81e755_3947_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/01imgmini.eastday.com\/mobile\/20190604\/2019060417_276c3318afc7434e971274a83e6b3d8d_5802_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "c48bd0d79700761b15681736157d2e4e",
                    "title": "女性不想肚子鼓鼓，可以多食此物，去除油腻，大肚子抚平了",
                    "date": "2019-06-04 17:49",
                    "category": "头条",
                    "author_name": "每日故事吧",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174923526.html",
                    "thumbnail_pic_s": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/2019060417_6e183ea2f8154f2a9899cd504186d5c7_9554_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/2019060417_537d64e11e2241ba8ddd51696c39c91c_0291_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/2019060417_17e0feba897842faa14c3dbb7b97ff93_8432_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "fe3dbc1c8b8cc26de93992e5a9e04cd6",
                    "title": "幽默笑话：老婆，如果可以的话，你真的应该少喝点啤酒了！",
                    "date": "2019-06-04 17:47",
                    "category": "头条",
                    "author_name": "幽默搞笑段子",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174748643.html",
                    "thumbnail_pic_s": "http:\/\/08imgmini.eastday.com\/mobile\/20190604\/2019060417_b649c1403fab4db48ddd51123c7e9daf_2333_cover_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/08imgmini.eastday.com\/mobile\/20190604\/2019060417_93b933abff47490984026f335561a7a3_7377_cover_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/08imgmini.eastday.com\/mobile\/20190604\/2019060417_10fa1d9e3ea645dd93bea9fa57272f72_2907_cover_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "99c32dda558d6beb4f0553dee81477fa",
                    "title": "哈市交警发高考通行提示：道里 10 条封闭路提前解封，送考车不限行",
                    "date": "2019-06-04 17:46",
                    "category": "头条",
                    "author_name": "ZAKER哈尔滨",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174611309.html",
                    "thumbnail_pic_s": "http:\/\/00imgmini.eastday.com\/mobile\/20190604\/20190604174611_bf6e886af4444111dffd1117688fab69_5_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/00imgmini.eastday.com\/mobile\/20190604\/20190604174611_bf6e886af4444111dffd1117688fab69_3_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/00imgmini.eastday.com\/mobile\/20190604\/20190604174611_bf6e886af4444111dffd1117688fab69_1_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "a5fe40f5453ba42721a206febe76c6e9",
                    "title": "洲际酒店集团携新品再现国际酒店投资加盟与特许经营展览会",
                    "date": "2019-06-04 17:45",
                    "category": "头条",
                    "author_name": "财报网",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174542296.html",
                    "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/20190604174542_2f83a20e6f9f114025a17e114bd24e52_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/20190604174542_2f83a20e6f9f114025a17e114bd24e52_1_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "cdb6f8da58447bc65309267f7749d123",
                    "title": "6月中旬贵人来，霉运去，富的流油的星座",
                    "date": "2019-06-04 17:45",
                    "category": "头条",
                    "author_name": "星座小可爱",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174534018.html",
                    "thumbnail_pic_s": "http:\/\/06imgmini.eastday.com\/mobile\/20190604\/20190604174534_646128f2206eca2e19333c3ccfafb5e3_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/06imgmini.eastday.com\/mobile\/20190604\/20190604174534_646128f2206eca2e19333c3ccfafb5e3_1_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/06imgmini.eastday.com\/mobile\/20190604\/20190604174534_646128f2206eca2e19333c3ccfafb5e3_3_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "66a6cb44599e111a4a045dcf45af0737",
                    "title": "夏季鲜花不好养？这5种花越晒花越美",
                    "date": "2019-06-04 17:45",
                    "category": "头条",
                    "author_name": "新华社",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174527828.html",
                    "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20190604\/20190604174527_897cb183a3bb40cb016397fad0ff4743_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/07imgmini.eastday.com\/mobile\/20190604\/20190604174527_897cb183a3bb40cb016397fad0ff4743_6_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/07imgmini.eastday.com\/mobile\/20190604\/20190604174527_897cb183a3bb40cb016397fad0ff4743_5_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "a241ed09ed800a5e1350621583bf53d5",
                    "title": "小米9怒降300多，还增加了5大功能，你心动了吗？",
                    "date": "2019-06-04 17:45",
                    "category": "头条",
                    "author_name": "科技朝闻",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174524621.html",
                    "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604174524_5a958608a2f9a7bda967c3175d61e8f6_1_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604174524_5a958608a2f9a7bda967c3175d61e8f6_2_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "6521c2dbb8f42c7dc89579f5c6f5d18d",
                    "title": "最能降得住白羊座的3星座：命定恋人，纠缠一生，绝配！",
                    "date": "2019-06-04 17:45",
                    "category": "头条",
                    "author_name": "星座小可爱",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174519121.html",
                    "thumbnail_pic_s": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/20190604174519_0248af0716b8ca3d8079c99601b4e9af_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/20190604174519_0248af0716b8ca3d8079c99601b4e9af_4_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/20190604174519_0248af0716b8ca3d8079c99601b4e9af_3_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "530788265736092c7331060ae06039a1",
                    "title": "卡扎菲当着布莱尔的面做出不雅动作，令其尴尬不已",
                    "date": "2019-06-04 17:45",
                    "category": "头条",
                    "author_name": "未来天际线",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174517917.html",
                    "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604174517_099fe813d8ff14130e061a5d1f61708c_1_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604174517_099fe813d8ff14130e061a5d1f61708c_3_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604174517_099fe813d8ff14130e061a5d1f61708c_6_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "977df1482d5323bf083b122d77927f49",
                    "title": "花季少女不幸“误入歧途” 六年感化助其走出阴影",
                    "date": "2019-06-04 17:43",
                    "category": "头条",
                    "author_name": "中国新闻网",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174319055.html",
                    "thumbnail_pic_s": "http:\/\/06imgmini.eastday.com\/mobile\/20190604\/20190604174319_949e604406cbbce093443563c5cae614_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/06imgmini.eastday.com\/mobile\/20190604\/20190604174319_949e604406cbbce093443563c5cae614_3_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/06imgmini.eastday.com\/mobile\/20190604\/20190604174319_949e604406cbbce093443563c5cae614_1_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "abc53d202b37e2f7973e5fec3f57e167",
                    "title": "原创 王者荣耀：端午降临峡谷，福利放送！电玩小子重回碎片商店",
                    "date": "2019-06-04 17:43",
                    "category": "头条",
                    "author_name": "浩玩社",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174302717.html",
                    "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/20190604174302_f3ec92c6042f3039ea3af6a2a2292c30_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/20190604174302_f3ec92c6042f3039ea3af6a2a2292c30_3_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/20190604174302_f3ec92c6042f3039ea3af6a2a2292c30_4_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "9c119de7ab5f6c607b08a497b023a055",
                    "title": "搞笑段子:你们为什么吃草",
                    "date": "2019-06-04 17:42",
                    "category": "头条",
                    "author_name": "以微笑直面人生",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174253667.html",
                    "thumbnail_pic_s": "http:\/\/07imgmini.eastday.com\/mobile\/20190604\/2019060417_cb4402c160004b4c868e2af4ac95871a_3170_cover_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "64721f7fa4c30416bd52fc93f96933b2",
                    "title": "#迪丽热巴蓝绿色眼线#，简直就是美颜暴击！这个妆容你觉得怎么样？",
                    "date": "2019-06-04 17:42",
                    "category": "头条",
                    "author_name": "芒果台小编",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174253247.html",
                    "thumbnail_pic_s": "http:\/\/01imgmini.eastday.com\/mobile\/20190604\/20190604174253_7124ae0e6117314123ea4d6598f401a9_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/01imgmini.eastday.com\/mobile\/20190604\/20190604174253_7124ae0e6117314123ea4d6598f401a9_6_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/01imgmini.eastday.com\/mobile\/20190604\/20190604174253_7124ae0e6117314123ea4d6598f401a9_4_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "c29f8619140239ff68f3c3b09fd6af25",
                    "title": "火箭交易状态更新！留队球员获得莫雷确认，一人或成休城牺牲品",
                    "date": "2019-06-04 17:41",
                    "category": "头条",
                    "author_name": "体育画圈圈",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604174157515.html",
                    "thumbnail_pic_s": "http:\/\/00imgmini.eastday.com\/mobile\/20190604\/2019060417_05481164a24a4e4c815e348d4ecfd4b6_1836_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/00imgmini.eastday.com\/mobile\/20190604\/2019060417_9ad1c0376bd348b8a8240a94722fcd1b_0423_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/00imgmini.eastday.com\/mobile\/20190604\/2019060417_1d22bac90daa4054a1dfc35dab22cb42_3302_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "9438dc2d02038122e1f5465196524941",
                    "title": "李宗伟放弃训练，无缘2020东京奥运会？",
                    "date": "2019-06-04 17:39",
                    "category": "头条",
                    "author_name": "羽毛球时代",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604173950355.html",
                    "thumbnail_pic_s": "http:\/\/08imgmini.eastday.com\/mobile\/20190604\/20190604173950_fa7b26eb67a39ee590c07376e4a29d7b_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/08imgmini.eastday.com\/mobile\/20190604\/20190604173950_fa7b26eb67a39ee590c07376e4a29d7b_1_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "eaa1ab40e1bdf543170afe2932468036",
                    "title": "价实！国米欲不低于7000万欧出售伊卡尔迪，6月底需填补财政",
                    "date": "2019-06-04 17:39",
                    "category": "头条",
                    "author_name": "智道足球",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604173911147.html",
                    "thumbnail_pic_s": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/2019060417_37a5bbd318e14282bc494085d111a7a3_8177_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/2019060417_bc9fb9d6db664c2689071e66423ab9cc_1585_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/2019060417_f7587b8e229b4c8d9374f6046139ffd6_8891_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "e270ed265e4e74943fc98e93eafea1c2",
                    "title": "端午节来了，吃此菜正当时，可延缓衰老，细嫩肌肤，好吃不贵！",
                    "date": "2019-06-04 17:39",
                    "category": "头条",
                    "author_name": "味美食家",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604173905594.html",
                    "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/2019060417_6b88b194962f4f0e9d3363ca3d89d32a_7754_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/2019060417_4ae6e29186e349ec83398a42ccfa33df_0138_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/2019060417_711adc8417c341949fbaa9613dbfbcf4_6168_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "6d354104bf5cc1e5267f3aee5ba76dce",
                    "title": "NBA最大谜底将揭晓，杜兰特去留线索曝光，2.2亿大合同有戏",
                    "date": "2019-06-04 17:37",
                    "category": "头条",
                    "author_name": "家乡体育",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604173754377.html",
                    "thumbnail_pic_s": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/2019060417_f52d85ef63dd4d25a71cff9cb5098824_2914_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/2019060417_e188e15dbf3f42efb34e40654b713575_2566_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/03imgmini.eastday.com\/mobile\/20190604\/2019060417_5af6092940ae4fffb2e6b21a94f4e769_5196_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "397298d0506d944eb6e531d7007680cc",
                    "title": "夏天不仅是西瓜，还有几种水果，好看又好吃，价格一斤才几块",
                    "date": "2019-06-04 17:37",
                    "category": "头条",
                    "author_name": "喋喋榴芒鹿",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604173714156.html",
                    "thumbnail_pic_s": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/20190604173714_2d60a6c3455131a669b6e52cac3704e4_1_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/20190604173714_2d60a6c3455131a669b6e52cac3704e4_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/20190604173714_2d60a6c3455131a669b6e52cac3704e4_3_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "1c1067b70db8d68ea0e40429b50ccbd9",
                    "title": "端午节你只知道吃粽子吗？端午节还可以吃这些美食",
                    "date": "2019-06-04 17:37",
                    "category": "头条",
                    "author_name": "忆螺味",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604173712159.html",
                    "thumbnail_pic_s": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604173712_34e28c9238dd1b0423ce0a4e0ffa100d_1_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604173712_34e28c9238dd1b0423ce0a4e0ffa100d_3_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/05imgmini.eastday.com\/mobile\/20190604\/20190604173712_34e28c9238dd1b0423ce0a4e0ffa100d_9_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "a05be91c05547fc1f8107782acf25894",
                    "title": "又一古装甜宠大剧将袭，女主却是意想不到的她，男主超神秘引猜测",
                    "date": "2019-06-04 17:36",
                    "category": "头条",
                    "author_name": "东冬说娱乐",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604173647543.html",
                    "thumbnail_pic_s": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/2019060417_0112d0d4e5474552bda0a72c83ba5e94_9424_cover_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/2019060417_b9bc98f3f63b419b9291847d5888d6b3_5419_cover_mwpm_03200403.jpg",
                    "thumbnail_pic_s03": "http:\/\/04imgmini.eastday.com\/mobile\/20190604\/2019060417_1317d53e4fd34cfea07d4ee9815514af_5905_cover_mwpm_03200403.jpg"
                  },
                  {
                    "uniquekey": "b8e32d647fb9ca8c52f05e6ad66a888b",
                    "title": "人脸识别车牌识别 甘家口小区成海淀区首个“智慧社区”",
                    "date": "2019-06-04 17:35",
                    "category": "头条",
                    "author_name": "北青网",
                    "url": "http:\/\/mini.eastday.com\/mobile\/190604173559679.html",
                    "thumbnail_pic_s": "http:\/\/09imgmini.eastday.com\/mobile\/20190604\/20190604173559_890a08db1c00ffd6116c19702fd0344d_2_mwpm_03200403.jpg",
                    "thumbnail_pic_s02": "http:\/\/09imgmini.eastday.com\/mobile\/20190604\/20190604173559_890a08db1c00ffd6116c19702fd0344d_1_mwpm_03200403.jpg"
                  }
                ]
          }, () => {
            wx.hideLoading()
          })
          console.log(_this.data.newInfo)
        },
        fail(err) {
          console.log('获取数据失败：' + err)
        }
      })
  },
  openChatView(e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.url,
      success: () => {
        wx.showToast({
          title: '已复制新闻地址，请打开浏览器查看详情',
          icon: 'none',
          duration: 2000
        });
      }
    })
  }

})