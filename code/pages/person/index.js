Page({
  data: {
    mineTabs: [
      {name: '像个飞鱼', type: 'swimming'},
      { name: '小贴士', type: 'tips' },
    ],
    swimingImgs: [
      { url: 'https://upload-images.jianshu.io/upload_images/1581684-37339bef5d9c234d.gif'},
      { url: 'https://upload-images.jianshu.io/upload_images/1581684-d3a49b76a2e11505.gif' },
      { url: 'https://upload-images.jianshu.io/upload_images/1581684-22dba194cdc15605.gif' },
      { url: 'https://upload-images.jianshu.io/upload_images/1581684-ee846463badb8386.gif' },
      { url: 'https://upload-images.jianshu.io/upload_images/1581684-8ae9f9723c78007d.gif' },
      { url: 'https://upload-images.jianshu.io/upload_images/1581684-0b30ba8eac42c19e.gif' },
      { url: 'https://upload-images.jianshu.io/upload_images/1581684-c8c3eda6c39b8cc5.gif' },
      { url: 'https://upload-images.jianshu.io/upload_images/1581684-de14253329cb331d.gif' }
    ],
    currentIndex:0,
    tabCur:0,
    scrollLeft: 0,
    sectionList: [
      { switchUrl: '/pages/rubbishList/index', 
        backgroundUrl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2874347051,3463619204&fm=26&gp=0.jpg', 
        corner: '涨知识',
        content: '今天你分类了吗？',
        webUrl: 'https://mp.weixin.qq.com/s/xONPLg1tUfRK1FfJmrgcSA',
        isWebview: true},
      { switchUrl: '/pages/webview/index', 
        backgroundUrl: 'https://mmbiz.qpic.cn/mmbiz_jpg/MmpuJMmuJHkgKryiaiaIrwEqVjRD8icUNNbL9A08s0kl3H9r0Vsxibc6IAtl10APxGf80T8qGU44YWEYje1JiaJjR9A/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
        corner: '科普',
        content: '去医院所需要注意的事',
        webUrl: 'https://mp.weixin.qq.com/s/z22UyKDXSKJ2X6AWQQ-eQw',
        isWebview: true},
      {
        switchUrl: '/pages/webview/index',
        backgroundUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563273774179&di=69d3cc4999d3123aed667b3b113aba58&imgtype=0&src=http%3A%2F%2Fimg1.juimg.com%2F141104%2F330500-14110409541030.jpg',
        corner: '技能',
        content: '像个飞鱼吧',
        webUrl: 'https://mp.weixin.qq.com/s/66MMqmzqNhngaPAMGe8N1A',
        isWebview: true
      }
    ]
  },
  onLoad() {
   
  },
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  viewInfo(e) {
    wx.showLoading({
      title: '请稍后',
    })
    let isWebview = e.currentTarget.dataset.webview,
      url = e.currentTarget.dataset.url,
      webUlr = e.currentTarget.dataset.weburl
    if (isWebview){
      wx.navigateTo({
        url: '/pages/webview/index?url=' + webUlr,
      })
    }else{
      wx.navigateTo({url})
    }
    wx.hideLoading()
  }
})