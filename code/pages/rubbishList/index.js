Page({
  data: {
    rubishList: [
      { name: '浅蓝', color: 'blue', id: 'recyclable', title: '可回收垃圾', imgUrl: '/images/rubbish/recyclable.png' },
      { name: '森绿', color: 'green', id: 'kitchen', title: '厨余垃圾', imgUrl: '/images/rubbish/kitchen.png' },
      { name: '嫣红', color: 'red', id: 'harmful', title: '有害垃圾', imgUrl: '/images/rubbish/harmful.png' },
      { name: '淡黄', color: 'yellow', id: 'other', title: '其他垃圾', imgUrl: '/images/rubbish/other.png' },
    ]
  },
  viewDetail: function (event) {
    wx.showLoading({ title: '请稍后' })
    wx.navigateTo({
      url: '/pages/rubbishInfo/index?id='
        + event.currentTarget.dataset.id + '&title=' 
        + event.currentTarget.dataset.title,
    })
    wx.hideLoading()
  }
})