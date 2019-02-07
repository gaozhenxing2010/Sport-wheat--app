//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this;
    wx.login({
      success: function (res) {
        wx.request({
          url: that.globalData.wx_url_1 + res.code + that.globalData.wx_url_2,
          header: {
            'content-type': 'application/json'
          },
          success: res => {
            that.globalData.openid = res.data.openid;
            //console.log(res.data.openid)
            //console.log(that.globalData.openid)
            //获取用户id
            wx.request({
              url: 'http://127.0.0.1:3000/addId',
              data: { openid: res.data.openid },
              success: (res) => {
                // console.log(res)
                that.globalData.uid = res.data.data[0].uid
              }
            });
          }
        })
      }
    });
  },
  globalData: {
    userInfo: null,
    loginName: null,
    urlPath: null,
    openid: 0,
    uid: "",
    wx_url_1: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx1afc302878302035&secret=6927ad3abc65a0bbb84aa0ea8d7e06d6&js_code=',
    wx_url_2: '&grant_type=authorization_code'
  }
})