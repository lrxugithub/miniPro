// pages/discover/waterfall_flow/waterfall_flow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [], //数据源
    windowWidth: 0, //页面视图宽度
    windowHeight: 0, //视图高度
    imgMargin: 6, //图片边距: 单位px
    imgWidth: 0,  //图片宽度: 单位px
    topArr: [0, 0], //存储每列的累积top
    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0,
    // 最后一次单击事件点击发生时间
    lastTapTime: 0,
    // 单击事件点击后要触发的函数
    lastTapTimeoutFunc: null, 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.showLoading({
      title: '加载中...'
    })
    var that = this;
    //获取页面宽高度
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        var imgMargin = that.data.imgMargin;
        //两列，每列的图片宽度
        var imgWidth = (windowWidth - imgMargin * 3) / 2;

        that.setData({
          windowWidth: windowWidth,
          windowHeight: res.windowHeight,
          imgWidth: imgWidth
        }, function () {
          that.loadMoreImages(); //初始化数据
        });
      },
    })
  },
  //加载图片
  loadImage: function (e) {

    var index = e.currentTarget.dataset.index; //图片所在索引
    var imgW = e.detail.width, imgH = e.detail.height; //图片实际宽度和高度
    var imgWidth = this.data.imgWidth; //图片宽度
    var imgScaleH = imgWidth / imgW * imgH; //计算图片应该显示的高度

    var dataList = this.data.dataList;
    var margin = this.data.imgMargin;  //图片间距
    //第一列的累积top，和第二列的累积top
    var firtColH = this.data.topArr[0], secondColH = this.data.topArr[1];
    var obj = dataList[index];

    obj.height = imgScaleH;

    if (firtColH < secondColH) { //表示新图片应该放到第一列
      obj.left = margin;
      obj.top = firtColH + margin;
      firtColH += margin + obj.height;
    }
    else { //放到第二列
      obj.left = margin * 2 + imgWidth;
      obj.top = secondColH + margin;
      secondColH += margin + obj.height;
    }

    this.setData({
      dataList: dataList,
      topArr: [firtColH, secondColH],
    });
  },
  //加载更多图片
  loadMoreImages: function () {
    var imgs = [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562574631857&di=3e9e8f05ac0efae0df0a87a6ab84335f&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farchive%2Ff1ec9cc0f49db910829f93bcdf4d2723464012b3.jpg',//js html css
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1563170632&di=59482ba48aa0fe75166dd51dfd661e4b&imgtype=jpg&er=1&src=http%3A%2F%2Fphotocdn.sohu.com%2F20160329%2FImg442736468.jpg',//计算机基础
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3570590728,2183928233&fm=26&gp=0.jpg',//算法和数据结构
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562575242496&di=3fe56dfabf5a8dbcc440778d6201472f&imgtype=0&src=http%3A%2F%2Foss.aliyuncs.com%2Fphotogallery%2Fphoto%2F1257842289342004%2F15088%2Ffa1cd83c-4a00-4fae-8320-4cc0281940f1.jpg',//运行环境
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562575345913&di=e9b103e4d673bb4ce7fd03b0c60dee07&imgtype=0&src=http%3A%2F%2Fwilderminds.blob.core.windows.net%2Fimg%2F2018%2F05%2F08%2Fbc1a1d84.png',//前端工程
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562575392997&di=9cb50a1f85a545dca940566c0a8b1e3a&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FH4hHmmLJLhnKcExjO2CYR53ukl4mqhInHbhnqZR5ZfDlR1526115321903.jpg',//框架和类库
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562575481619&di=5afba9b7e9a5f62b8703ad840cfeb370&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181211%2Ffdc095efe8b242eeb7b59c96c49619fa.jpeg',
      'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3886046484,1228904201&fm=26&gp=0.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1562575704974&di=c7c7dd8f267252001656627db0d37df8&imgtype=0&src=http%3A%2F%2Fmmbiz.qpic.cn%2Fmmbiz_jpg%2Fmw5B4Cb0DmicrQuA7dqfgeic8jwzWLz6EZYaYUgFApLEP8icYia5Xyd3tia9xsibgibjMTlqy0lKMbWC8PRVib4Jb6hVDw%2F640%3Fwx_fmt%3Djpeg',
      
    ]
    // var imgs = [
    //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1409185525,4059560780&fm=26&gp=0.jpg',
    //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4076355782,2436939971&fm=15&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=777075993,2126273204&fm=11&gp=0.jpg',
    //   'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=57777155,3251523579&fm=11&gp=0.jpg',
    //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3825727093,2830650732&fm=11&gp=0.jpg',
    //   'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2379065095,654347953&fm=26&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2749679283,2472217536&fm=11&gp=0.jpg',
    //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=677128138,409184861&fm=11&gp=0.jpg',
    //   'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1884091074,3049103326&fm=26&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1600363417,3661952978&fm=11&gp=0.jpg',
    //   'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2069544162,3090555174&fm=11&gp=0.jpg',
    //   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3328655038,3143543956&fm=26&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3953624046,2332872335&fm=26&gp=0.jpg',
    //   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=717009955,687560133&fm=26&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4243037288,2388509769&fm=26&gp=0.jpg',
    //   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2644451528,4180971732&fm=26&gp=0.jpg',
    //   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2658655215,924706045&fm=26&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=400545645,1325440240&fm=26&gp=0.jpg',
    //   'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2735743532,3162562682&fm=11&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2357555025,1781222560&fm=26&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1604156508,3282489713&fm=26&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=380663325,2271064034&fm=26&gp=0.jpg',
    //   'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=174537541,3462862985&fm=26&gp=0.jpg',
    //   'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1752649241,364583051&fm=26&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2890516059,4166188770&fm=27&gp=0.jpg',
    //   'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2435144503,200941795&fm=11&gp=0.jpg',
    //   'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=877833827,2847590581&fm=26&gp=0.jpg',
    //   'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=894452177,2810600152&fm=11&gp=0.jpg',
    //   'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4053642431,248486335&fm=27&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2914607659,905736210&fm=11&gp=0.jpg',
    //   'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1629456501,1514429218&fm=26&gp=0.jpg',
    // ];

    var tmpArr = [];
    for (let i = 0; i < 22; i++) {
      var index = parseInt(Math.random() * 100) % imgs.length;
      var obj = {
        src: imgs[index],
        height: 0,
        top: 0,
        left: 0,
      }
      tmpArr.push(obj);
      imgs.splice(index, 1);
    }

    var dataList = this.data.dataList.concat(tmpArr)
    this.setData({ dataList: dataList }, function () {
      wx.hideLoading()
    });
  },
  /**预览图片 */
  previewImg: function (e) {

    var index = e.currentTarget.dataset.index;
    var dataList = this.data.dataList;
    var currentSrc = dataList[index].src;
    // var srcArr = dataList.map(function (item) {
    //   return item.src;
    // });
    wx.previewImage({
      urls: [currentSrc],
    })
  },
  /// 按钮触摸开始触发的事件
  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
  },
  /// 单击、双击
  multipleTap: function (e) {
    var that = this
    // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
    if (that.touchEndTime - that.touchStartTime < 350) {
      // 当前点击的时间
      var currentTime = e.timeStamp
      var lastTapTime = that.lastTapTime
      // 更新最后一次点击时间
      that.lastTapTime = currentTime

      // 如果两次点击时间在300毫秒内，则认为是双击事件
      if (currentTime - lastTapTime < 300) {
        console.log("double tap")
        // 成功触发双击事件时，取消单击事件的执行
        clearTimeout(that.lastTapTimeoutFunc);
        wx.showModal({
          title: '提示',
          content: '个人类型小程序暂不支持跳转公众号',
          showCancel: false
        })
        // wx.navigateTo({
        //   url: '/pages/font/public/index',
        // })
      } else {
        // 单击事件延时300毫秒执行，这和最初的浏览器的点击300ms延时有点像。
        that.lastTapTimeoutFunc = setTimeout(function () {
          that.previewImg(e)
        }, 300);
      }
    }
  },
})