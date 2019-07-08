Page({
  data: {
    bookList:[
      { type: 'skills', title:'技术', name: '' },
      { type: 'cultural', title: '人文', name: '' }
    ],
    tabCur:0
  },
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  }
})