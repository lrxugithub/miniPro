// pages/bookInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tower: [{
        id: 0,
      url: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2517227413,1336589847&fm=26&gp=0.jpg'
      }, {
        id: 1,
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562668063621&di=032198feb814a4f3824427896d510fbb&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fmobilecms%2Fs750x750_jfs%2Ft2086%2F244%2F2656394044%2F138656%2Faa01e932%2F56eb649dN61ec363b.jpg%2521q80.jpg'
      }, {
        id: 2,
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562668114336&di=65800aa9ac854504962d21dcf1df2737&imgtype=0&src=http%3A%2F%2Fwww.kfzimg.com%2FG06%2FM00%2F91%2F0B%2Fp4YBAFrtQOqAKJ7rAACtiScoY64325_b.jpg'
      }, {
        id: 3,
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562668175979&di=0e315e108013f7ca828cb101612ad421&imgtype=0&src=http%3A%2F%2Fec4.images-amazon.com%2Fimages%2FI%2F41GCtB5X8tL.jpg'
      },{
        id: 4,
        url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562667472066&di=5a39bb1aa65550c3786b3b4755deea4c&imgtype=0&src=http%3A%2F%2Fimages.bookuu.com%2Fbook%2FC%2F01846%2F2961425-fm.jpg'
      }
    ],
    bgUrl: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.towerSwiper('tower');
    this.setData({
      bgUrl: this.data.tower[this.findIndexByZIndex(this.data.tower)].url
    })
  },
  dotStyle(e) {
    this.setData({
      dotStyle: e.detail.value
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      towerList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },

  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },

  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.towerList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        towerList: list,
        bgUrl: list[this.findIndexByZIndex(list)].url
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        towerList: list,
        bgUrl: list[this.findIndexByZIndex(list)].url
      })
    }
  },
  findIndexByZIndex(list) {
    let i = 0
    for(;i < list.length; i++){
      if (list[i].mLeft == 0) break
    }
    return i
  },
  wow(e){
    wx.showModal({
      title: '来自喵星人的问候',
      content: '已向主人发出喵喵喵!',
    })
  }
})