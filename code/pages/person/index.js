Page({
  data: {
    mineTabs: [
      {name: '游泳教程', type: 'swimming'},
      // { name: '英雄联盟', type: 'lol' }
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
  },
  onLoad() {
    wx.showModal({
      title: '铲屎官的问候',
      content: '个人中心用来展示兴趣爱好和铲屎的日常，最近一直假装忙于铲屎，分身乏术，顾偷懒先摆放一个tab页，后续会陆续更新',
    })
  },
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})