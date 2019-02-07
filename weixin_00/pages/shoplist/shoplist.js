//获取应用实例
const app = getApp()
Page({
handleJump:function(e){
  //1.获取扩展属性值
  var id=e.target.dataset.id;
  //2.判断跳转
  wx: wx.navigateTo({
    url: '../details/details?lid='+id,

  })

},
  addCart: function () {
    // 查看是否授权
    wx.getSetting({
      success: (res) => {
        if (res.authSetting['scope.userInfo']) {
          wx.request({
            url: 'http://127.0.0.1:3000/addCart',
            data: { id: this.data.list[0].lid, uid: app.globalData.uid },
            success: (res) => {
              wx.showToast({
                title: res.data.msg,
                icon: "success",
                duration: 1500
              });
            }
          });
        } else {
          wx: wx.navigateTo({
            url: '/pages/login/login',
          })
        }
      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:3000/running',
      data: {
        id: options.id
      },
      method: 'GET',
      success: ((res) => {
        this.setData({
          list: res.data
        })

      }
      )
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})