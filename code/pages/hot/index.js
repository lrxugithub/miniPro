Page({
  /**
   * 页面的初始数据
   */
  data: {
    moveStartY: 0,
    moveEndY: 0,
    isSlideDown: true, //下滑
    scrollTop: 0, //滚动条的位置，用来控制上滑到底部，下拉到顶部不触发上滑下拉时间,
    num: 0,//用来记录滑动到第几章图片，以便用来计算滚动条需要滑动的距离
    list: [
      { title: '自来水从哪里来 - 回形针', 
        backgroundUrl: 'http://f.cdn.xsteach.cn/uploaded/0e/bf/6a/0ebf6a13249f840d8eb2618dca2f130c003.gif',
        vid: 'z0673idostk' },
      {
        title: '如何准确定位你的手机', 
        backgroundUrl: 'http://image.17173.com/bbs/v1/2012/09/08/1347092427417.gif',
        vid: 'o0740eyv0oz'
      },
      {
        title: '如何打造一款美白护肤品 - 回形针', 
        backgroundUrl: "http://hiphotos.baidu.com/feed/pic/item/a71ea8d3fd1f413492c294282e1f95cad0c85eea.jpg",
        vid: 'u0783lwasuw'
      },
      {
        title: '如何制造婴儿奶粉 - 回形针', 
        backgroundUrl: 'http://zkres1.myzaker.com/201809/5b9b12647f52e9582d00002e_raw.gif',
        vid: 'l07663lolqh'},
      {
        title: '如何用煤烧出四万亿度电 - 回形针', 
        backgroundUrl: 'http://5b0988e595225.cdn.sohucs.com/images/20180410/efa02d666cfb43e79db89d2a23ddb37d.gif',
        vid: 'j07449ljhw1'
      }
    ],//原始图片路径
    showList: [],//展示图片路径
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initList();
  },
  initList: function () {//初始化列表项的各项参数
    let that = this;
    let tempList = that.data.list;
    tempList.forEach((item, index) => {
      item.num = index;
      switch (index) {
        case 0:
          item.top = 0; //top是距离屏幕顶部的距离
          break;
        case 1:
          item.top = 60;
          break;
        default:
          item.top = 40 + index * 20;
          break;
      }
      return item;
    });
    this.setData({ showList: tempList });
  },
  bindtouchstart: function (e) {
    this.setData({ moveStartY: e.changedTouches[0].pageY });
  },
  bindtouchend: function (e) {
    let that = this;
    let tempList = that.data.showList;
    that.setData({ moveEndY: e.changedTouches[0].pageY })
    setTimeout(function () {
      if (that.data.num >= 0 && that.data.num <= that.data.showList.length - 2) {
        if (that.data.moveStartY < that.data.moveEndY && that.data.num > 0) {//表示下滑 初始位置Y坐标小于最终位置Y坐标 第二个条件控制滑倒顶部部不能再划
          for (let i = 0; i < tempList.length; i++) {
            if (tempList[i].top < 60) { //距离屏幕顶部小于屏幕60%的高度时，往下移动 距离屏幕目高度top值增加60%
              tempList[i].top = tempList[i].top + 60;
            } else { //距离屏幕顶部大于等于屏幕60%的高度时，往下移动 屏幕高度的20%
              tempList[i].top = tempList[i].top + 20;
            }
          }
          that.setData({
            showList: tempList,
            isSlideDown: true,
            num: that.data.num - 1
          });
        } else if (that.data.moveStartY > that.data.moveEndY && that.data.num < that.data.showList.length - 2) { //表示上滑,第二个条件控制滑倒底部不能再划
          for (let i = 0; i < tempList.length; i++) {
            if (tempList[i].top > 60) { //距离屏幕顶部超过屏幕60%的高度时，往上移品目高度的20%
              tempList[i].top = tempList[i].top - 20;
            } else { //距离屏幕顶部小于屏幕60%的高度时，往上移品目高度的60%
              tempList[i].top = tempList[i].top - 60;
            }
          }
          that.setData({
            showList: tempList,
            isSlideDown: false,
            num: that.data.num + 1
          });
        }
      } else {
        if (that.data.num < 0)
          that.setData({ num: 0 })
        if (that.data.num > that.data.showList.length - 2)
          that.setData({ num: that.data.showList.length - 2 })
      }
    }, 200)
  },
  videoInfo: function (e) {
    let objStr = JSON.stringify(e.currentTarget.dataset)
    wx.navigateTo({
      url: '/pages/video/index?preParam=' + objStr
    })
  }
})