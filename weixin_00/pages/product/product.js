// pages/product/product.js
Page({
checkForm:function(event){
  console.log(event);
  //1.获取用户表单中输入内容
  var pno=event.detail.value.pno;
  var pname=event.detail.value.pname;
  // console.log(pno);  
  // console.log(pname);  
  //2.验证pno
  var reg = /^[a-z0-9]{6}$/i;
  if(!reg.test((pno))){
    wx.showToast({
      title: '商品格式不正确,必须为6位',
      icon:"none"
    });
    setTimeout(function(){
      wx.hideToast();
    },1500);
    return;
  }
   //3.如果验证不通过 错误提示
  //4.发送ajax请求   
  wx.request({
    url: 'http://127.0.0.1:3000/addProduct',
    data:{pno:pno,pname:pname},
    success:(res)=>{
  if(res.data.code>0){
    wx.showToast({
      title:res.data.msg,
    });
    setTimeout(function(){
      wx.hideToast();
    },1500)
  }else{
    wx.showToast({
      title: '商品添加失败',
    });
    setTimeout(function(){
      wx.hideToast();
    },1500)
  }
    }
  })
  //5.商品添加成功 
                                                                                                                                           
},
  /**
   * 页面的初始数据
   */
  data: {
  
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