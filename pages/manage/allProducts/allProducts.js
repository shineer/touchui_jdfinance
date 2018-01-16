// allProducts.js
export default {
  data() {
    return {
      swiperHeight: ui.WIN_WIDTH / 1125 * 263,
      scroHeight: parseInt(ui.DEFAULT_CONTENT_HEIGHT * 0.8),
      eatTime: [{
        text: '不限',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '收益率由高到低',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      eatTime1: [{
        text: '不限',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '保险',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '养老保障',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '券商',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '转让资产',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '二级市场',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      eatTime2: [{
        text: '不限',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '0-3个月',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '3-6个月',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '6-12个月',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '12个月以上',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      eatTime3: [{
        text: '不限',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '到期自动承诺',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '自动续存',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      service: [{
        text: '买单',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '在线点菜',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '外卖送餐',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '在线排队',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '预订',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      service3: [{
        text: '不限',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '0-1000元',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '1001-10000元',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '10001元-50000元',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }, {
        text: '50001以上',
        tagClass: 'tag-before-00',
        tagSelectedClass: 'select-class',
        checked: false
      }],
      navList: [
        {
          name: '综合排序',
          active: '',
          arrow: 'slide_down',
          bindtap: 'openPopup1'
        }, {
          name: '产品类型',
          active: '',
          arrow: 'slide_down',
          bindtap: 'openPopup2'
        }, {
          name: '期限',
          active: '',
          arrow: 'slide_down',
          bindtap: 'openPopup3'
        }, {
          name: '更多',
          active: '',
          arrow: 'slide_down',
          bindtap: 'openPopup4'
        }
      ],
      winWidth: ui.WIN_WIDTH,
      popupTop: ui.DEFAULT_HEADER_HEIGHT + 46,
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      switch1: false,
      switch2: false,

      show: {

      },
      current: 0,
      className: 'active',
      className2: '',
      isDistrict: true,
      isSubway: false,
      content_list:[
        {
          title:'养老保险 | 建行养老宜兴',
          number:'5.13%',
          smallTitle:'七日年化收益率',
          time: '产品期限',
          time2:'30天',
          smallTitle2:'小金库理财专享'
        }, {
          title: '保险 | 京洪年花',
          number: '5.80%',
          smallTitle: '历史年华投资回报率',
          time: '产品期限',
          time2: '30天',
          smallTitle2: '小金库理财专享'
        }, {
          title: '养老保险 | 建行养老宜兴',
          number: '5.13%',
          smallTitle: '七日年化收益率',
          time: '产品期限',
          time2: '30天',
          smallTitle2: '小金库理财专享'
        }, {
          title: '养老保险 | 国寿嘉年花',
          number: '5.13%',
          smallTitle: '七日年化收益率',
          time: '产品期限',
          time2: '30天',
          smallTitle2: '小金库理财专享'
        }, {
          title: '防化保险 | 车贷你说成功率',
          number: '5.13%',
          smallTitle: '七日年化收益率',
          time: '产品期限',
          time2: '30天',
          smallTitle2: '小金库理财专享'
        }
      ]
    }
  },
  methods: {
    openPopup(index) {
      if (index === 0) {
        this.show2 = false
        this.show3 = false
        this.show4 = false
        this.show1 = !this.show1
      } else if (index === 1) {
        this.show1 = false
        this.show3 = false
        this.show4 = false
        this.show2 = !this.show2
      } else if (index === 2) {
        this.show1 = false
        this.show2 = false
        this.show4 = false
        this.show3 = !this.show3
      } else {
        this.show1 = false
        this.show2 = false
        this.show3 = false
        this.show4 = !this.show4
      }
    },

    change(val) {
      this.navList[0].name = val.join('-')
      this.show1 = false
    },
    change1(result) {
      this.navList[1].name = result.area
      this.show2 = false
    },
    change2(val) {
      this.navList[2].name = val.join('-')
      this.show3 = false
    },
    change3(val) {
      this.show4 = false
    },

    singleTap(opt) {
      this.eatTime.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },
    singleTap1(opt) {
      this.eatTime1.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },
    singleTap2(opt) {
      this.eatTime2.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },
    singleTap3_1(opt) {
      this.eatTime3.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },
    singleTap3_2(opt) {
      this.service3.forEach((item, index) => {
        item.checked = (index === opt)
      })
    },




    formReset() {
      this.switch1 = false
      this.switch2 = false
      this.eatTime.forEach((item, index) => {
        item.checked = false
      })
      this.service.forEach((item, index) => {
        item.checked = false
      })
      this.eatNumber.forEach((item, index) => {
        item.checked = false
      })
    },
    popHide() {
      this.navList[0].active = ''
    },
    popShow() {
      this.navList[0].active = 'active'
    },
    popHide1() {
      this.navList[1].active = ''
    },
    popShow1() {
      this.navList[1].active = 'active'
    },
    popHide2() {
      this.navList[2].active = ''
    },
    popShow2() {
      this.navList[2].active = 'active'
    },
    popHide3() {
      this.navList[3].active = ''
    },
    popShow3() {
      this.navList[3].active = 'active'
    },
    handleChange(index, key) {
      this[key] = index
    },
    handleContentChange(index, key) {
      this[key] = index
    },
    select(result) {
      this.navList[1].name = result.city
      this.show2 = false
    },
    districtShow() {
      this.className = 'active'
      this.className2 = ''
      this.isDistrict = true
      this.isSubway = false
    },
    subwayShow() {
      this.className = ''
      this.className2 = 'active'
      this.isDistrict = false
      this.isSubway = true
    },

    chart(){
      ui.navigateTo({
        url: '/pages/chart/chart'
      })
    },
    navigateBack() {
      ui.navigateBack()
    }
  },
  mounted() {
    
  }
}
