Page({
  data: {
    mineTabs: [
      {name: '游泳教程', type: 'swimming'}
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
    scrollLeft: 0
  },
  onLoad() {
  },
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})