//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    loading: -1
  },
  onLoad: function () {
    let that = this
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      this.getIn()
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        this.getIn()
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
      this.getIn()
    }
  },
  getUserInfo: function(e) {
    let that = this
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    },() => {
      that.getIn()
    })
  },
  getIn: function() {
    if(this.data.loading >= 0){
      return
    }
    this.add()
  },
  add: function() {
    let that = this,progressNum = 0;
    for (let i = 0; i <= 100; i++){
      setTimeout(function(){
        that.setData({ loading: that.data.loading + 1 })
        if(i == 100) {
          setTimeout(()=>{
            wx.reLaunch({
              url: '/pages/hot/index',
            })
          },1000)
        }
      },500)
    }
  }
})
