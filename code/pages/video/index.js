// const txvContext = requirePlugin("tencentvideo");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    videoObj:{},
    tabCur: 0,
    vid: '',
    tabList: [
      { name: '其他视频' },
      { name: '周边商城' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let preParam = JSON.parse(options.preParam)
    this.setData({vid: preParam.obj.vid})
  },
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
    })
  },
  videoErrorCallback: function(e){
    wx.showModal({
      title: '播放出错'
    })
  }
})