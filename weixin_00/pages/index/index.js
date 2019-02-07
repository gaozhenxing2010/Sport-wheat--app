//index.js
//获取应用实例
const app = getApp()
Page({
  handleJump:function(e){
    //1:获取扩展属性值
    var id = e.target.dataset.id;
    //2:判断跳转
      wx:wx.navigateTo({
        url: '/pages/shoplist/shoplist?id='+id,

      })
  },
suo:function(e){
  wx.navigateTo({
    url: '../search/search',
  })
},
  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
      {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
      {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
      {id:4,img_url:"http://127.0.0.1:3000/img/banner4.png"}
    ],
    navlist:[
      {id:1,img_url:"http://127.0.0.1:3000/icons/grid-01.png",title:"跑步鞋"},
      {id:2,img_url:"http://127.0.0.1:3000/icons/grid-02.png",title:"休闲鞋"},
      {id:3,img_url:"http://127.0.0.1:3000/icons/grid-03.png",title:"板鞋"},
      {id:4,img_url:"http://127.0.0.1:3000/icons/grid-04.png",title:"帆布鞋"},
      {id:5,img_url:"http://127.0.0.1:3000/icons/grid-05.png",title:"运动短T"},
      {id:6,img_url:"http://127.0.0.1:3000/icons/grid-06.png",title:"运动长T"},
      {id:7,img_url:"http://127.0.0.1:3000/icons/grid-07.png",title:"运动卫衣"},
      {id:8,img_url:"http://127.0.0.1:3000/icons/grid-08.png",title:"运动短裤"},
      {id:9,img_url:"http://127.0.0.1:3000/icons/grid-09.png",title:"运动长裤"}
    ],
    commodity:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:3000/commodity',
      data:{},
      method:'GET',
      success:((res)=>{
        this.setData({
          commodity:res.data
        })
        
      }
    )})
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
