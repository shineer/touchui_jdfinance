// choiceness.js
export default {
  data () {
    return {
      autoplay: {
        delay: 1000
      },
      banner:[
        {
          src:require('#/images/jx_banner_01.png')
        }, {
          src: require('#/images/jx_banner_02.png')
        }, {
          src: require('#/images/jx_banner_03.png')
        }, {
          src: require('#/images/jx_banner_04.png')
        }, {
          src: require('#/images/jx_banner_05.png')
        }
      ],
      credit_banner:[
        {
          src: require('#/images/service01.png')
        }, {
          src: require('#/images/service02.png')
        }, {
          src: require('#/images/service03.png')
        }, {
          src: require('#/images/service04.png')
        }, {
          src: require('#/images/service05.png')
        }
      ],
      credit_banner2: [{
        src: require('#/images/gambit01.png')
      }, {
        src: require('#/images/gambit02.png')
      }, {
        src: require('#/images/gambit03.png')
      }, {
        src: require('#/images/gambit04.png')
      }, {
        src: require('#/images/gambit05.png')
      }, {
        src: require('#/images/gambit06.png')
      }, {
        src: require('#/images/gambit07.png')
      }, {
        src: require('#/images/gambit08.png')
      }, {
        src: require('#/images/gambit09.png')
      }, {
        src: require('#/images/gambit10.png')
      }, {
        src: require('#/images/gambit11.png')
      }, {
        src: require('#/images/gambit12.png')
      }, {
        src: require('#/images/gambit13.png')
      }, {
        src: require('#/images/gambit14.png')
      }],
      service_content:[
        {
          name:'jx神器',
          head: require('#/images/head.jpg'),
          title1:'一大波优惠券来袭！带你玩转领券中心，定时抢满100减50优惠券！',
          title2:'#带你玩转京西金融APP##每日福利#',
          title3:'定时抢满100减50、满20减19优惠券！带你玩转领券中心，一大波优惠等你来领取哟！',
          img: require('#/images/service_banner01.png'),
          stick:true,
          time:'10小时前',
          comment:4,
          praise:11
        }, {
          name: '京西股票',
          head: require('#/images/head.jpg'),
          title1: '罗振宇你尽管秀，反正我听完“跨年演讲”是更焦虑了',
          title2: '',
          title3: '罗振宇的跨年演讲，和郭德纲的相声，冯小刚的贺岁片是类似的，都是能够让大家放松一下的娱乐产品。罗振宇的天才之处，在于巧妙的提高了娱乐的逼格。',
          img: require('#/images/service_banner02.png'),
          stick: false,
          time: '1天前',
          comment: 6,
          praise: 12
        }
      ],
      service_content2: [
        {
          name: '叶落落',
          head: require('#/images/head.jpg'),
          title1: '毛振华回应亚布力视频：搞得像个上访户，跟窦娥似的',
          title2: '',
          title3: '我一个堂堂正正的企业家如今搞得像个上访户，跟窦娥似的，这事我不愿再多说什么。',
          img: require('#/images/service_banner03.png'),
          stick: false,
          time: '2天前',
          comment: 12,
          praise: 15
        }, {
          name: '理财慢报',
          head: require('#/images/head.jpg'),
          title1: '春季躁动周期先行 建材类三股可以逢底专注',
          title2: '',
          title3: '日前根据广发侧率成，春季躁动几乎每年都有，“躁动”行业也存在一定的线索。',
          img: require('#/images/service_banner04.png'),
          stick: false,
          time: '3天前',
          comment: 7,
          praise: 55
        }, {
          name: '华夏基银',
          head: require('#/images/head.jpg'),
          title1: '华夏基银新闻早知道（1月2日）',
          title2: '',
          title3: '新年新气象，今日大盘多半会走高，如您手中持有2017年冠军基，根据往年大盘漂移经验，建议在2018年继续持有要慎重。',
          img: require('#/images/service_banner05.png'),
          stick: false,
          time: '4天前',
          comment: 40,
          praise: 111
        }
      ]
    }
  },
  methods: {
    details(){
      ui.navigateTo({
        url: '/pages/details/details'
      })
    },
    showFullScreenSearch() {
      ui.app.searchShow = true
      ui.setStatusBarStyle({ style: 'dark' })
    }
  },
  mounted () {
  }
}
