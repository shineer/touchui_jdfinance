// home.js
export default {
  data () {
    return {
      current: 0,
      contentHeight: ui.DEFAULT_CONTENT_HEIGHT-56,
      tabsWidth: ui.WIN_WIDTH - 120,
      banner1:[
        {
          src:require('#/images/banner1.png')
        },{
          src: require('#/images/banner2.png')
        }, {
          src: require('#/images/banner3.png')
        }
      ],
      banner2: [{
        src: require('#/images/banner4.png')
      }, {
        src: require('#/images/banner5.png')
      }, {
        src: require('#/images/banner6.png')
      }],
      banner3: [{
        src: require('#/images/banner6.png')
      }],
      autoplay: {
        delay: 5000
      },
      moneyMatters:[
        {
          icon:'coffers',
          backgroundColor: '#D5A861',
          title1:'京西小金库',
          title1_1:'活期 首次转入+2%收益',
          title2:'4.0%+2%',
          title2_2:'7日年化收益率',
          navigateTo: '/pages/coffers/coffers'
        }, {
          icon: 'money_matters',
          backgroundColor: '#3D60FF',
          title1: '定期理财',
          title1_1: '小白理财 最高年化5.8%',
          title2: '4.0%～5.8%',
          title2_2: '多种投资期限可选',
          navigateTo: '/pages/manage/greenHand/greenHand'
        }, {
          icon: 'fund',
          backgroundColor: '#3D60FF',
          title1: '基金',
          title1_1: '小白基金 加送7天3%',
          title2: '10元起投',
          title2_2: '全场1折起',
          navigateTo: '/pages/funds/fundChoiceness/fundChoiceness'
        }
      ],
      whiteBar: [
        {
          icon: 'white-bar',
          backgroundColor: '#3C60FD',
          title1: '白条',
          title1_1: '',
          title1_2: '先用后还，随心分期',
          title2: '额度最高5万',
        }, {
          icon: 'green-hand',
          backgroundColor: '#E54B40',
          title1: '小白信用',
          title1_1: '年轻人的第一笔信用',
          title2: '享信用特权',
        }, {
          icon: 'gold-bar',
          backgroundColor: '#FBB316',
          title1: '金条借款',
          title1_1: '按日计息 超低费率',
          title2: '最高可借30万',
        }, {
          icon: 'instalment',
          backgroundColor: '#3D60FF',
          title1: '消费分期',
          title1_1: '机票/教育/租房/买车/学车',
          title2: '可享分期免息',
        }
      ],
      payment: [
        {
          icon: 'flash',
          backgroundColor: '#E54B40',
          title1: '京西闪送',
          title1_1: 'Apple Pay、银联云闪付',
          title2: '天天立减10元',
        }, {
          icon: 'gift',
          backgroundColor: '#FBB314',
          title1: '薅羊毛',
          title1_1: '天天领福利',
          title2: '抽4999元大奖',
        }, {
          icon: 'transfer-accounts',
          backgroundColor: '#3C60FD',
          title1: '转账',
          title1_1: '手机号即可转账',
          title2: '转账0手续费',
        }, {
          icon: 'owner',
          backgroundColor: '#3C60FD',
          title1: '车主服务',
          title1_1: '爱车服务管理',
          title2: '首次洗车立减5元',
        }, {
          icon: 'mobile',
          backgroundColor: '#3C60FD',
          title1: '手机充值',
          title1_1: '月底记得缴话费',
          title2: '领券立减2元',
        }, {
          icon: 'repayment',
          backgroundColor: '#3C60FD',
          title1: '信用卡还款',
          title1_1: '支持预约还款',
          title2: '预约还款 赚收益',
        }, {
          icon: 'living-payment',
          backgroundColor: '#FBB314',
          title1: '生活缴费',
          title1_1: '水电煤',
          title2: '查看支持城市',
        }, {
          icon: 'crowd-funding',
          backgroundColor: '#3C60FD',
          title1: '京西众筹',
          title1_1: '科技潮物 非凡匠心',
          title2: '11元秒杀',
        }
      ],
      //启动页
      isSplashSwiper: true,
      duration: 500,
      interval: 1000,

      // 引导页
      showMask: true,
      statusBar:ui.STATUS_BAR_HEIGHT
    }
  },
  methods: {
    handleChange(index, key) {
      this[key] = index
    },
    handleContentChange(index, key) {
      this[key] = index
    },

    navigateTo(navigateTo){
      console.log(navigateTo)
      ui.navigateTo({
        url: navigateTo
      })
    },

    // 扫一扫
    code(){
      ui.setStatusBarStyle({ style: 'light' })
      ui.scanCode({
        success: (res) => {
          console.log(res)
          ui.showToast({ title: '扫到了' + res.result+',开心不～' })
        },
        complete(){
          ui.setStatusBarStyle({ style: 'dark' })
        }
      })
    },
    //引导页
    handleShowMask(){
      this.showMask=false
      ui.setStorageSync('showMask', 'show')
    },

    //启动页

    splashInto() {
      this.isSplashSwiper = false
      ui.setStorageSync('splash', 'show')
    },

    hideSplash() {
      let splashShow = JSON.parse(window.localStorage.getItem('splash'))
      let showMask = JSON.parse(window.localStorage.getItem('showMask'))
      let environment = ui.IS_APP
      if (environment){
        if (splashShow === 'show') {
          this.isSplashSwiper = false
        }
        if (showMask === 'show') {
          this.showMask = false
        }
      }else{
        this.isSplashSwiper = false
        this.showMask = false
      }

      let closeTime = ui.IS_IOS ? 1000 : 500

      // 初始化完成后，关闭启动页面
      window.setTimeout(() => {
        ui.closeSplashscreen()
      }, closeTime)

    },
    swiperInit() {
      this.hideSplash()
    },
    login(){
      import(`#/pages/dialogs/loginInterface.ui`).then((content) => {
        ui.showDialog({
          // 窗体标题
          content: content,
          statusBarColor: 'dark',
          // 向dialog1.ui传入数据
          data: {

          },
          // 接收ui.hideDialog回传的数据
          onHide: (data) => {

          }
        })
      })
    }
  },
  mounted () {
    
  }
}