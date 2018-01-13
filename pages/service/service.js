// service.js
export default {
  data () {
    return {
      service:[
        {
          title:'众筹',
          rightTitle:'全部众筹',
          list: [
            {
              icon: 'crowd-funding01',
              color: '#FBB316',
              name: '好物推荐'
            },
            {
              icon: 'seckill',
              color: '#3C60FD',
              name: '出众潮货'
            },
            {
              icon: 'crowd-funding03',
              color: '#F53F4B',
              name: '最新上线'
            },
            {
              icon: 'crowd-funding04',
              color: '#2A5DFF',
              name: '领神券'
            },
            {
              icon: 'crowd-funding05',
              color: '#3C60FD',
              name: '智能首发'
            },
            {
              icon: 'crowd-funding06',
              color: '#45BFB2',
              name: '筹你喜欢'
            },
            {
              icon: 'crowd-funding07',
              color: '#F53F4B',
              name: '时尚潮物'
            },
            {
              icon: 'crowd-funding08',
              color: '#45BFB2',
              name: '暖东公益'
            },
          ]
        },
        {
          title: '生活服务',
          rightTitle: '更多',
          list: [
            {
              icon: 'service01',
              color: '#3C60FD',
              name: '手机充值'
            },
            {
              icon: 'service02',
              color: '#3C60FD',
              name: '信用卡还款'
            },
            {
              icon: 'service03',
              color: '#45BFB2',
              name: '车主服务'
            },
            {
              icon: 'service04',
              color: '#FBB316',
              name: '惠加油'
            },
            {
              icon: 'service05',
              color: '#3C60FD',
              name: '租房'
            },
            {
              icon: 'living-payment',
              color: '#45BFB2',
              name: '生活缴费'
            },
            {
              icon: 'owner',
              color: '#F53F4B',
              name: '买车'
            },
            {
              icon: 'service08',
              color: '#3C60FD',
              name: '卡转让'
            },
            {
              icon: 'service09',
              color: '#3C60FD',
              name: '转账'
            }
          ]
        },
        {
          title: '购物',
          rightTitle: '',
          list: [
            {
              icon: 'shopping01',
              color: '#F53F4B',
              name: 'GO返利'
            },
            {
              icon: 'shopping02',
              color: '#45BFB2',
              name: '京西到家'
            },
            {
              icon: 'shopping04',
              color: '#FBB316',
              name: '金币商城'
            },
            {
              icon: 'shopping04',
              color: '#45BFB2',
              name: '玩物'
            },
            {
              icon: 'shopping05',
              color: '#F53F4B',
              name: '一元抢券'
            },
            {
              icon: 'shopping06',
              color: '#F53F4B',
              name: '拍拍分期用'
            },
            {
              icon: 'shopping07',
              color: '#F53F4B',
              name: '拍拍二手'
            }
          ]
        }
      ]
      
    }
  },
  methods: {
    showFullScreenSearch() {
      ui.app.searchShow = true
      ui.setStatusBarStyle({ style: 'dark' })
    }
  },
  mounted () {}
}
