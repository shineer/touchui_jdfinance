// coffers.js
export default {
  data () {
    return {
      autoplay: {
        delay: 7000
      },
      autoplay2: {
        delay: 5000
      },
      banner: [
        {
          src: require('#/images/coffers_banner1_1.png')
        }, {
          src: require('#/images/coffers_banner1_2.png')
        }, {
          src: require('#/images/coffers_banner1_3.png')
        }
      ],
      banner2: [
        {
          src: require('#/images/coffers_banner2_1.png')
        }, {
          src: require('#/images/coffers_banner2_2.png')
        }, {
          src: require('#/images/coffers_banner2_3.png')
        }, {
          src: require('#/images/coffers_banner2_4.png')
        }, {
          src: require('#/images/coffers_banner2_5.png')
        }
      ],
      moneyMatters:[
        {
          title1:'5.07%',
          title1_1:'近七日年化收益率',
          title2:'产品期限 30天',
          title2_2:'1000元起购'
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
      huiLife:[
        {
          lifeContent:[
            {
              bgColor1: '#FBB319',
              icon1:'hui_life01',
              title1: '早起挑战',
              title1_1: '赚现金',
              bgColor2: '#F77916',
              icon2: 'hui_life02',
              title2: '还信用卡',
              title2_2: '极速到账'
            },
            {
              bgColor1: '#F54C29',
              icon1: 'white-bar',
              title1: '还白条',
              title1_1: '自动还款更省心',
              bgColor2: '#FBB319',
              icon2: 'mobile',
              title2: '手机充值',
              title2_2: '极速到账'
            }
          ]
        }, {
          lifeContent: [
            {
              bgColor1:'#FBB319',
              icon1: 'hui_life05',
              title1: '京西饭粒',
              title1_1: '超级返',
              bgColor2: '#F77916',
              icon2: 'service09',
              title2: '转账',
              title2_2: '免手续费'
            },
            {
              bgColor1: '#F77916',
              icon1: 'shopping01',
              title1: 'Go返利',
              title1_1: '返现金',
              bgColor2: '#F54C29',
              icon2: 'hui_life08',
              title2: '生活缴费',
              title2_2: '便捷生活'
            }
          ]
        }, {
          lifeContent: [
            {
              bgColor1: '#C1975B',
              icon1: 'hui_life02',
              title1: '小金卡',
              title1_1: '去办理',
              bgColor2: '#FBB319',
              icon2: 'hui_life10',
              title2: '京西回收',
              title2_2: '去换钱'
            },
            {
              bgColor1: '#F54C29',
              icon1: 'crowd-funding08',
              title1: '暖冬公益',
              title1_1: '爱心捐赠',
              bgColor2: '#C5C5C5',
              icon2: 'hui_life12',
              title2: '还房贷',
              title2_2: '去设置'
            }
          ]
        }, {
          lifeContent: [
            {
              bgColor1: '#C5C5C5',
              icon1: 'hui_life13',
              title1: '还车贷',
              title1_1: '去设置',
              bgColor2: '#C5C5C5',
              icon2: 'hui_life14',
              title2: '给父母',
              title2_2: '去设置'
            },
            {
              bgColor1: '#C5C5C5',
              icon1: 'hui_life15',
              title1: '给Ta',
              title1_1: '去设置',
              bgColor2: '',
              icon2: '',
              title2: '',
              title2_2: ''
            }
          ]
        },
      ],
      credit_banner2: [{
        src: require('#/images/coffers_banner3_1.png')
      }, {
        src: require('#/images/coffers_banner3_2.png')
      }, {
        src: require('#/images/coffers_banner3_3.png')
      }, {
        src: require('#/images/coffers_banner3_4.png')
      }]
    }
  },
  methods: {
    chart() {
      ui.navigateTo({
        url: '/pages/chart/chart'
      })
    }
  },
  mounted () {}
}
