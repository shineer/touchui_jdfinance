// fundChoiceness.js
let browserManager
let touchuiBridge
export default {
  data () {
    return {
      autoplay: {
        delay: 5000
      },
      autoplay2: {
        delay: 7000
      },
      banner: [
        {
          src: require('#/images/fundChoiceness01.png')
        }, {
          src: require('#/images/fundChoiceness02.png')
        }
      ],
      column: [
        {
          icon: 'fundChoiceness01',
          name: '小白基金',
          badgeText:'5%+'
        },
        {
          icon: 'fundChoiceness02',
          name: '热销排行',
          badgeText: ''
        },
        {
          icon: 'fundChoiceness03',
          name: '猜跌涨',
          badgeText: ''
        },
        {
          icon: 'fundChoiceness04',
          name: '任务',
          badgeText: ''
        },
        {
          icon: 'fundChoiceness05',
          name: '天天领',
          badgeText: '赚10%'
        },
        {
          icon: 'fundChoiceness06',
          name: '新手福利',
          badgeText: ''
        },
        {
          icon: 'fundChoiceness07',
          name: '新发基金',
          badgeText: '疯抢'
        },
        {
          icon: 'fundChoiceness08',
          name: '定投专区',
          badgeText: ''
        }, {
          icon: 'fundChoiceness09',
          name: '领券',
          badgeText: ''
        }, {
          icon: 'fundChoiceness10',
          name: '全部服务',
          badgeText: ''
        }
      ],
      moneyMatters: [
        {
          title1: '5.07%',
          title1_1: '近七日年化收益率',
          title2: '产品期限 30天',
          title2_2: '1000元起购'
        },
        {
          title1: '5.10%',
          title1_1: '业绩比较基准',
          title2: '产品期限 28天',
          title2_2: '低风险 | 0申赎费'
        }, {
          title1: '5.08%+3%',
          title1_1: '七日年化收益率',
          title2: '新年福利 30天理财',
          title2_2: '提前领3.00%奖学金'
        }
      ],
      moneyMatters2: [
        {
          title1: '171.48%',
          title1_1: '最近三年增长率',
          title2: '国泰估值优势混合（LOF）',
          title2_2: '10.00元起投 | 中风险'
        },
        {
          title1: '167.26%',
          title1_1: '最近三年增长率',
          title2: '新华行业灵活配置混合A',
          title2_2: '500.00元起投 | 中风险'
        }, {
          title1: '5.08%+3%',
          title1_1: '最近三年增长率',
          title2: '东方红产业升级混合',
          title2_2: '1000.00元起投 | 中高风险'
        }
      ],
      credit_banner: [
        {
          src: require('#/images/invest01.png')
        }, {
          src: require('#/images/invest02.png')
        }, {
          src: require('#/images/invest03.png')
        }
      ],
      credit_banner2: [
        {
          src: require('#/images/expert01.png')
        }, {
          src: require('#/images/expert02.png')
        }, {
          src: require('#/images/expert03.png')
        }, {
          src: require('#/images/expert04.png')
        }
      ],
      fundArticle:[
        {
          head: require('#/images/user_avatar_000.png'),
          name:'小基金',
          time:'5小时前',
          title:'看家事2018投资峰会直播 抽50元京西E卡！',
          content:'',
          img: require('#/images/article01.png')
        },{
          head: require('#/images/user_avatar_001.png'),
          name: '国不泰基金',
          time: '5小时前',
          title: '好业绩都是奋斗出来的，什么样的基金值得推荐？',
          content: '后台有泰粉留言说，想让小幸给推荐一只基金。讲真，这下可难住小幸了',
          img: require('#/images/article02.png')
        },{
          head: require('#/images/user_avatar_002.png'),
          name: '魔鬼基金',
          time: '5小时前',
          title: '【2018市场展望】上投摩根李博：经济增长超预期，继续乐观看市',
          content: '展望未来，2018A股大概率将继续维持结构分化等震荡格局',
          img: require('#/images/article03.png')
        }, {
          head: require('#/images/user_avatar_003.png'),
          name: '叫不上基金',
          time: '5小时前',
          title: '2018从靠谱的基金定投开始',
          content: '20178投资秘籍，适用于“月光族”、“上班族”等各类人群。快来看看吧！',
          img: require('#/images/article04.png')
        }
      ],


      // 分享

      collect_press: require('#/images/browser/topbar_white_collect_press.png'),
      collect: require('#/images/browser/topbar_white_collect.png'),
      share: require('#/images/browser/topbar_white_share.png'),
      isCollect: false
    }
  },
  methods: {
    showFullScreenSearch() {
      ui.app.searchShow = true
      ui.setStatusBarStyle({ style: 'dark' })
    },
    navigateBack() {
      ui.navigateBack()
    },
    fundsDetails(){
      // ui.navigateTo({
      //   url: '/pages/details/details2'
      // })
      let that = this
      browserManager=ui.openBrowser({
        url: 'http://192.168.1.125:8020/bridgeDemo/index3.html',
        backgroundColor: '#3399ff',
        color: '#ffffff',
        success: function () {
          // 监听页面加载完毕事件
          // browserManager.onLoad(function() {
          // })

          that.setBtns(that.collect, that.share)
          browserManager.onBtnClick(function (id) {
            if (id === 'share') {
              browserManager.sentMessage({ name: 'share', value: 'http://www.uileader.com' })
            } else if (id === 'collect') {
              if (that.isCollect) {
                that.setBtns(that.collect, that.share)
                that.isCollect = false
              } else {
                that.setBtns(that.collect_press, that.share)
                that.isCollect = true
              }
            }
          })

          browserManager.onMessage(function (message) {
            if (message.name === 'share') {
              let val = message.value
              ui.share({
                target: val.target,
                type: val.type,
                icon: val.icon,
                title: val.title,
                content: val.content,
                href: val.href
              })
            }
          })
        }
      })
    },
    setBtns(collect, share) {
      browserManager.setBtns([
        {
          id: 'share',
          icon: share
        },
        {
          id: 'collect',
          icon: collect
        }
      ])
    },
    chart() {
      ui.navigateTo({
        url: '/pages/chart/chart'
      })
    },
    details(){
      ui.navigateTo({
        url: '/pages/details/details'
      })
    }
  },
  mounted () {}
}
