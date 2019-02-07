// pages/details/details.js
const app=getApp()
Page({
  //切换商品详情与购买记录
  handleClick(e){
    var id=e.target.dataset.id;
    this.setData({
      select:id
    })
  },
  //跳转首页
  indexBtn:function(){
  wx.switchTab({
    url: '/pages/index/index'
  })
  },
  //跳转到购物车 
 shopCart:function(){
    wx.getSetting({ 
      success:(res)=>{
        if (res.authSetting['scope.userInfo']) {
          wx:wx.navigateTo({
            url: '/pages/shopCart/shopCart',
          })
        } else {
          wx:wx.navigateTo({
            url: '/pages/login/login',
          })
        }
      }
      })
  },
  //加入购物车
 addCart: function () {
   // 查看是否授权
   wx.getSetting({
     success: (res) => {
       if (res.authSetting['scope.userInfo']) {
         wx.request({
           url: 'http://127.0.0.1:3000/addCart',
           data: {id: this.data.list[0].lid, uid: app.globalData.uid},
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
    details_list:[],
    select:"",
    details_img:[]
  },
   //加入购物车
  /* addCart:function(){
     console.log(1)
    //查看是否授权登录
     wx.getSetting({
       success:(res)=>{
         if(res.authSetting['scope.userInfo']){
           console.log(this.lid)
           wx.request({
           url: 'http://127.0.0.1:3000/addCart',
             data:{id:this.id},
             success:(res)=>{
               console.log(res)
              wx.showToast({
                 title: res.data.msg, 
                 icon:"seccess",
                 duration:1500
               });
             }
           });
         }else{
           console.log(2)
          wx:wx.navigateTo({
            url: '/pages/login/login',
           })
         }
       }
    })
   },*/

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var lid=options.lid;
    wx.request({
      url: 'http://127.0.0.1:3000/details',
      data:{id:lid},
      method:'GET',
      success:((res)=>{
        this.setData({
          list:res.data
        })
      })
 
    }),
    wx.request({
      url: 'http://127.0.0.1:3000/detailsa',
      data:{id:lid},
      method:'GET',
      success:((res)=>{
        this.setData({
          details_list:res.data
        })
      })
    }),
    wx.request({
      url: 'http://127.0.0.1:3000/detailsb',
      data:{id:lid},
      method:"GET",
      success:((res)=>{
        this.setData({
          details_img:res.data
        })
      })
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