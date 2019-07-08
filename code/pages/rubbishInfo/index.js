// pages/rubishInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    preId: '',
    preTitle: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id, title = options.title
    console.log(options)
    switch(id){
     case 'recyclable':
        this.setPreInfo(id, title)
        break;
      case 'kitchen':
        this.setPreInfo(id, title)
        break;
      case 'harmful':
        this.setPreInfo(id, title)
        break;
      case 'other':
        this.setPreInfo(id, title)
        break;
    }
  },
  setPreInfo(id, title){
    this.setData({ preId: id, preTitle: title })
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