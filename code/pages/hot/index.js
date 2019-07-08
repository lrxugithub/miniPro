Page({
  data: {
   
  },
  methods: {
    onLoad() {
      
    },
    onShareAppMessage() {
      return {
        title: 'ColorUI-高颜值的小程序UI组件库',
        imageUrl: 'https://image.weilanwl.com/color2.0/share2215.jpg',
        path: '/pages/basics/home/home'
      }
    },
  },
  viewInfo() {
    wx.showLoading({
      title: '请稍后',
    })
    wx.navigateTo({
      url: '/pages/rubbishList/index',
    })
    wx.hideLoading()
  }
})