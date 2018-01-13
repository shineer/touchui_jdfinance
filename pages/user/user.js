// user.js
export default {
  data () {
    return {
      userList:[
        {
          content:[
            {
              icon:'card-bag',
              iconColor:'#1651F0',
              name:'卡包'
            }, {
              icon: 'bill',
              iconColor: '#3C60FD',
              name: '账单'
            }, {
              icon: 'vip',
              iconColor: '#FBB316',
              name: '会员中心'
            }, {
              icon: 'home',
              iconColor: '#D39C5B',
              name: '我的资产'
            }
            
          ]
        }, {
          content: [
            {
              icon: 'white-bar',
              iconColor: '#1651F0',
              name: '我的白条'
            }, {
              icon: 'gold-bar',
              iconColor: '#F99C1A',
              name: '我的金条'
            }, {
              icon: 'anquan',
              iconColor: '#3AB585',
              name: '我的保险'
            }, {
              icon: 'crowd-funding',
              iconColor: '#1651F0',
              name: '我的众筹'
            }

          ]
        }, {
          content: [
            {
              icon: 'crowd-funding01',
              iconColor: '#F99C1A',
              name: '我的收藏'
            }, {
              icon: 'attention',
              iconColor: '#F99C1A',
              name: '我的关注'
            }, {
              icon: 'record',
              iconColor: '#1651F0',
              name: '浏览记录'
            }, {
              icon: 'gift',
              iconColor: '#E54B40',
              name: '介绍给朋友'
            }, {
              icon: 'customer-service',
              iconColor: '#1651F0',
              name: '专属客服'
            }
          ]
        }
      ],
      className:''
      
    }
  },
  methods: {
    scrollStart(){
      this.className='start'
    },
    scrollEnd(){
      this.className = ''
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
  mounted () {}
}
