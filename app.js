export default {
  data () {
    return {
      tabIndex: 0,
      tabBarList: [],
      isApp: ui.IS_APP,
      navStyle: {},
      tabBar: {},
      tabBarHeight: 56,
      toggle: false,
      headerHeight: ui.DEFAULT_HEADER_HEIGHT,
      paths: [],
      barHeight: ui.STATUS_BAR_HEIGHT,
      searchShow: false,
      height: ui.DEFAULT_CONTENT_HEIGHT,
      searchValue: '',
      historyContent: [],
      hotList: [{
          text: '银行+',
          tagClass: 'tag-before'
        },{
          text: '京西出众',
          tagClass: 'tag-before'
        }, {
          text: '理财',
          tagClass: 'tag-before'
        }, {
          text: '白条商城',
          tagClass: 'tag-before'
        }, {
          text: '扫一扫',
          tagClass: 'tag-before'
        }
      ],
      searchNav:[
        {
          icon:'funds',
          name:'基金'
        }, {
          icon: 'stock',
          name: '股票'
        }, {
          icon: 'crowd-funding2',
          name: '众筹'
        }, {
          icon: 'insurance',
          name: '保险'
        }, {
          icon: 'article',
          name: '文章'
        }, {
          icon: 'rebate',
          name: '商品'
        }, {
          icon: 'service-number',
          name: '服务号'
        },
      ],

      // 分享
      winHeight: ui.WIN_HEIGHT,
      shareMask:false,
      shareColumn:[
        {
          icon: 'friends_circle',
          name: '朋友圈',
          bgColor: '#41C451',
          share:'weixin_timeline'
        }, {
          icon: 'weixin',
          name: '微信好友',
          bgColor: '#3CBC4B',
          share: 'weixin_message'
        }, {
          icon: 'QQ',
          name: 'QQ好友',
          bgColor: '#27A9EE',
          share: 'qq'
        }, {
          icon: 'weibo',
          name: '微博',
          bgColor: '#F53B43',
          share: 'weibo'
        }
      ],
      showTime: ['0.1s', '0.2s', '0.3s', '0.4s', '0.5s', '0.6s'],
      hideTime: ['0.6s', '0.5s', '0.4s', '0.3s', '0.2s', '0.1s'],
      className:'',
      animationDuration: ['0.1s', '0.2s', '0.3s', '0.4s', '0.5s', '0.6s'],
      target: 'qq',
      type: 'link',
      icon: 'http://images.uileader.com/20180116/96d4b45d-4765-41fd-bc29-85919ddb4057.png',
      title: '高仿京东金融',
      content: '官方推出的TOUCH UI应用案例',
      href: 'http://www.uileader.com/touchui_jdfinance/#/pages/share/greenHand/greenHand',
    }
  },
  computed: {
      // 控制通用导航栏是否显示
    navigationBarVisible () {
      return this.pageConfig.navigationBarVisible !== false
    },
      // 控制通用导航栏是否显示返回按钮（首页不显示，其他页显示）
    showBack () {
      let homePath = this.paths[0]
      if (this.tabBar && this.tabBar.paths) {
        return this.tabBar.paths.indexOf(homePath) < 0
      } else {
        return homePath !== this.$route.path
      }
    },
      // 通用导航栏应用app.json和page.json的设置
    winConfig () {
      let window = this.$router.options.window
      let config = { ...window,
        ...this.pageConfig
      }
      let color
      if (config.navigationBarTextColor === 'black') {
        color = '#666'
      } else if (config.navigationBarTextColor === 'white') {
        color = '#fff'
      } else {
        color = config.navigationBarTextColor
      }

      let scrollType = document.body.getAttribute('scroll-type')

      this.navStyle = {
        backgroundColor: config.navigationBarBackgroundColor,
        color: color,
        borderBottom: `1px solid ${config.navigationBarBorderColor}`,
        backgroundImage: config.navigationBarBackgroundGraident,
        position: scrollType === 'body' ? 'fixed' : 'absolute'
      }
      if (this.navStyle.backgroundColor) {
        this.navStyle.backgroundImage = 'none'
      }

      if (config.navigationBarBorderColor) {
        this.navStyle.borderBottom = `1px solid ${config.navigationBarBorderColor}`
      } else {
        this.navStyle.borderBottom = '0'
      }
      return config
    },
      // 控制底部标签栏是否显示
    isTabBar () {
      return this.tabBarList && this.tabBarList.length > 0
    },
      // 设置底部标签栏样式
    tabBarStyle () {
      let style = {}
      if (this.navigationBarVisible && this.tabBar.position === 'top') {
        style.top = this.headerHeight + 'px'
      }
      let scrollType = document.body.getAttribute('scroll-type')
      style.position = scrollType === 'body' ? 'fixed' : 'absolute'
      return style
    },

    bottom () {
      return this.isTabBar ? `${this.tabBarHeight}px` : 0
    },
      // 底部标签栏应用app.json和page.json的设置
    pageConfig () {
      if (this.isTabBar) {
        return this.tabBarList[this.tabIndex].pageConfig
      } else {
        return this.$route.meta.pageConfig || window.__$uiPageConfig
      }
    }
  },
  watch: {
    '$route.path' (path) {
      this.handleIosGesture()
      this.initTab()
    }
  },
    // 初始化
  created () {
    this.initTab()
    this.initPaths()
    this.$nextTick(() => {
      this.handleIosGesture()
    })
  },
  methods: {
      // 初始化底部标签栏
    initTab () {
      this.tabBar = this.getTabBar()
      this.tabBarList = this.tabBar.list
      if (this.tabBar.paths) {
        this.tabIndex = this.tabBar.paths.indexOf(this.$route.path)
      }
    },
      // 初始化路由
    initPaths () {
      let routes = this.$router.options.routes
      this.paths = routes.map((item) => {
        return item.path
      })
    },
      // iOS是否禁用侧滑退出
    handleIosGesture () {
      if (ui.IS_IOS) {
        ui.setPagePopGesture && ui.setPagePopGesture({
          openPagePopGesture: !this.pageConfig.disableIosGesture
        })
      }
    },
      // tabBar示例用到，底部标签栏切换前事件处理
    handleTabBeforeChange ({
        id,
        index,
        next
      }) {
        //loginState用于判断登录状态
      if (id === 'funds' && index === 3) {
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
      } else if (id === 'manage' && index === 2) {
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
      }else{
        //next为执行默认跳转操作
        next()
      }
    },

      // tabBar示例用到，底部标签栏切换后事件处理
    handleTabChange ({
        id,
        index
      }) {

    },

      // 回退处理
    handleBack () {
      ui.navigateBack()
    },
    getTabBar () {
      let tabBars = [this.$router.options.tabBar, ...this.$router.options.pageTabBars]
      for (let i = 0; i < tabBars.length; i++) {
        if (tabBars[i].paths && tabBars[i].paths.indexOf(this.$route.path) > -1) {
          return tabBars[i]
        }
      }
      return {}
    },

    // 退出搜索
    hideFullScreenSearch(title) {
      this.searchShow = false
      ui.setStatusBarStyle({
        style: 'dark'
      })
      ui.showToast({
        title: title
      })
    },
    // 清空历史记录
    deleteHistory() {
      let that=this
      ui.showConfirm({
        content: '确定删除全部搜索历史记录？',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        success(result) {
          if (result.confirm) {
            that.historyContent = []
          }
        }
      })
    },
    // 搜索退出还原状态栏颜色
    searchHideHandle() {
      // ui.setStatusBarStyle({
      //   style: 'light'
      // })
    },
    // 进入搜索设置状态栏颜色为黑色
    searchShowHandle() {
      // ui.setStatusBarStyle({
      //   style: 'dark'
      // })
    },
    // 提交搜索
    searchSubmit(e) {
      if (e.search !== '') {
        let value = {
          text: e.search,
          tagClass: 'tag-before'
        }
        this.historyContent.unshift(value)
        this.hideFullScreenSearch()
        ui.showToast({
          title: e.search
        })
      }
      this.searchValue = ''
    },
    // 点击热门搜索
    hotTap(opt) {
      this.hideFullScreenSearch()
      ui.showToast({
        title: this.hotList[opt].text
      })
    },
    // 点击搜索历史
    historyTap(index) {
      this.hideFullScreenSearch()
      console.log(1314)
      ui.showToast({
        title: this.historyContent[index].text
      })
    },

    // 分享
    maskHide(share) {
      // setTimeout(() => {
        this.shareMask = false
      // }, 500);
      console.log(share)
      // this.target = val
      this.target = share
      ui.share({
        target: this.target,
        type: this.type,
        icon: this.icon,
        title: this.title,
        content: this.content,
        href: this.href
      }, function () {
        console.log('分享成功')
      }, function () {
        console.log('分享失败')
      })


    },
    maskShow() {
      this.className='active'
      this.animationDuration = this.showTime
    },
    columnHide(){
      this.className = 'hideActive'
      this.animationDuration=this.hideTime
      // this.shareMask = false
    }

  },
  mounted () {

  }
}
