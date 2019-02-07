// pages/addmessage/addmessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  selectImg:function(){
    //上传一个商品图片
    //1.选中一张图片  
    wx.chooseImage({
      count:1,//最多可以选择图片数量
      sizeType:["compressed"],//压缩图片
      sourceType:["camera","album"],//图片来源
      success: function(res) {
        var files=res.tempFilePaths; //选中图片
        //1.5将图片上传
        wx.uploadFile({
          url: 'http://127.0.0.1:3000/upload',
          filePath: files[0],//本地图片
          name: 'mypic',     //上传图片 name
          header:{"Content-Type":"multipart/form-data"},  //修改了请求头
          formData:{pid:19,pname:"小辣椒"},
          success:function(res){
            console.log(res);
          }
        })
      },
    })
     
  },
  
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