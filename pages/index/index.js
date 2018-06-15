//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proList: [{
      logo: "/images/pro_01.jpg",
      title: "精英贷",
      desc: "22周岁以上即可\n最快3小时下款\n件均8万，最高20万",
      btnDetail: "/images/btn_detail.png",
      btnAsk: "/images/btn_ask.png"
    }, {
      logo: "/images/pro_02.jpg",
      title: "月供贷",
      desc: "不看工作，不看流水\n不限地区，无须家人签字\n最高可做150万",
      btnDetail: "/images/btn_detail.png",
      btnAsk: "/images/btn_ask.png"
      }, {
        logo: "/images/pro_03.jpg",
        title: "保单贷",
        desc: "凭祥版征信和保单官网帐号密码就可进件\n最高可做150万",
        btnDetail: "/images/btn_detail.png",
        btnAsk: "/images/btn_ask.png"
      }
    ]
  },

  //跳转详情页面
  toDetail: function(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  }
 
})
