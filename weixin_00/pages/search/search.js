// pages/search/search.js
Page({
  search:function(e){
    this.setData({
      name:e.detail.value,
      inputValue:e.detail.value
    })
  },
  search1:function(e){
    wx.request({
      url: 'http://127.0.0.1:3000/search1',
      data:{keyword:this.data.name},
      success:(res)=>{
        if(res.data.data.length==0){
          this.setData({isShow:false,isShow2:true})
        }else{
          this.setData({isShow:true,isShow2:false})
        }
        this.setData({
          list1:res.data.data
        })
        
        //搜索完成后将查询到的数据显示出来
          
        
      }

    })
  },
  /*
   * 页面的初始数据
   */
  data: {
  list1:[],
  isShow:false,
  isShow2:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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