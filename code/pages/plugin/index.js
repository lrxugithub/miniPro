Page({
  data: {
    bookList:[
      { type: 'skills', head: '技术', title: '这里有个戏精铲屎官，主子撸一下？', name: '', content: '这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o',label1: '戏精系列', lable2: '铲屎官内心的独白' },
      { type: 'cultural', head: '人文', title: '《我不是教你诈》-- 刘墉', name: '', content: '教你认清人性。不可因为他们的好，忘了他们的坏；不要因为他们的恶，忘了他们的善。', label1: '社会处事', lable2: '学会反思' }
    ],
    tabCur:0
  },
  tabSelect(e) {
    this.setData({
      tabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  viewInfo(e){
    console.log('e',e)
    let type = e.currentTarget.dataset.type
    if (type == 'cultural'){
      wx.navigateTo({
        url: '/pages/bookInfo/index',
      })
    }else{
      wx.showModal({
        title: '来自喵星人的问候',
        content: '又假又小气的铲屎官还没舍得分享技术书籍',
      })
    }
  }
})