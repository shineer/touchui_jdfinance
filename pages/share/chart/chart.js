// chart.js
export default {
  data () {
    return {

      bottomContent:[
        {
          title:'基金档案',
          content:'基金概况、基金公告、分红'
        },{
          title: '投资组合',
          content: ''
        }, {
          title: '基金经理',
          content: '李XX'
        }, {
          title: '基金公司',
          content: '光不乏基金管理有限公司'
        }, {
          title: '交易说明',
          content: '申购/赎回流程/购买费率/赎回费率'
        }
      ],
      current:0,
      winWidth: ui.WIN_WIDTH,
      contentHeight: ui.DEFAULT_CONTENT_HEIGHT - 56,
      swiperHeight:645,
      lineData:'',
      margin: {
        top: 20,
        right: 20,
        bottom: 0,
        left: 60
      },
      data:[
        {
          dataByTopic: [
            {
              topicName: '本基金',
              topic: 123,
              dates: [
                {
                  date: '2017-01-11',
                  value: 500
                },
                {
                  date: '2017-01-12',
                  value: 600
                },
                {
                  date: '2017-01-13',
                  value: 400
                },
                {
                  date: '2017-01-14',
                  value: 300
                },
                {
                  date: '2017-01-15',
                  value: 200
                },
                {
                  date: '2017-01-16',
                  value: 500
                },
                {
                  date: '2017-01-17',
                  value: 450
                },
                {
                  date: '2017-01-18',
                  value: 600
                },
                {
                  date: '2017-01-19',
                  value: 560
                },
                {
                  date: '2017-01-20',
                  value: 1000
                },
                {
                  date: '2017-01-21',
                  value: 1600
                },
                {
                  date: '2017-01-22',
                  value: 1900
                },
                {
                  date: '2017-01-23',
                  value: 2000
                },
                {
                  date: '2017-01-24',
                  value: 2200
                },
                {
                  date: '2017-01-25',
                  value: 3000
                },
                {
                  date: '2017-01-26',
                  value: 3200
                },
                {
                  date: '2017-01-27',
                  value: 3600
                }
              ]
            }, {
              topicName: '新起点',
              topic: 345,
              dates: [
                {
                  date: '2017-01-11',
                  value: 500
                },
                {
                  date: '2017-01-12',
                  value: 450
                },
                {
                  date: '2017-01-13',
                  value: 300
                },
                {
                  date: '2017-01-14',
                  value: 600
                },
                {
                  date: '2017-01-15',
                  value: 650
                },
                {
                  date: '2017-01-16',
                  value: 600
                },
                {
                  date: '2017-01-17',
                  value: 550
                },
                {
                  date: '2017-01-18',
                  value: 800
                },
                {
                  date: '2017-01-19',
                  value: 960
                },
                {
                  date: '2017-01-20',
                  value: 940
                },
                {
                  date: '2017-01-21',
                  value: 1000
                },
                {
                  date: '2017-01-22',
                  value: 1500
                },
                {
                  date: '2017-01-23',
                  value: 1300
                },
                {
                  date: '2017-01-24',
                  value: 1700
                },
                {
                  date: '2017-01-25',
                  value: 2500
                },
                {
                  date: '2017-01-26',
                  value: 2700
                },
                {
                  date: '2017-01-27',
                  value: 3000
                }
              ]
            }
          ],
          colorSchema: ['#F4192B', '#437BF3']
        }, {
          dataByTopic: [
            {
              topicName: '本基金',
              topic: 123,
              dates: [
                {
                  date: '2017-01-11',
                  value: 700
                },
                {
                  date: '2017-01-12',
                  value: 800
                },
                {
                  date: '2017-01-13',
                  value: 600
                },
                {
                  date: '2017-01-14',
                  value: 500
                },
                {
                  date: '2017-01-15',
                  value: 400
                },
                {
                  date: '2017-01-16',
                  value: 300
                },
                {
                  date: '2017-01-17',
                  value: 950
                },
                {
                  date: '2017-01-18',
                  value: 700
                },
                {
                  date: '2017-01-19',
                  value: 1560
                },
                {
                  date: '2017-01-20',
                  value: 1500
                },
                {
                  date: '2017-01-21',
                  value: 1200
                },
                {
                  date: '2017-01-22',
                  value: 1000
                },
                {
                  date: '2017-01-23',
                  value: 2800
                },
                {
                  date: '2017-01-24',
                  value: 2600
                },
                {
                  date: '2017-01-25',
                  value: 1300
                },
                {
                  date: '2017-01-26',
                  value: 1200
                },
                {
                  date: '2017-01-27',
                  value: 3500
                }
              ]
            }, {
              topicName: '新起点',
              topic: 345,
              dates: [
                {
                  date: '2017-01-11',
                  value: 400
                },
                {
                  date: '2017-01-12',
                  value: 650
                },
                {
                  date: '2017-01-13',
                  value: 800
                },
                {
                  date: '2017-01-14',
                  value: 200
                },
                {
                  date: '2017-01-15',
                  value: 950
                },
                {
                  date: '2017-01-16',
                  value: 1000
                },
                {
                  date: '2017-01-17',
                  value: 1550
                },
                {
                  date: '2017-01-18',
                  value: 1200
                },
                {
                  date: '2017-01-19',
                  value: 1060
                },
                {
                  date: '2017-01-20',
                  value: 1340
                },
                {
                  date: '2017-01-21',
                  value: 1500
                },
                {
                  date: '2017-01-22',
                  value: 1200
                },
                {
                  date: '2017-01-23',
                  value: 1300
                },
                {
                  date: '2017-01-24',
                  value: 1700
                },
                {
                  date: '2017-01-25',
                  value: 2500
                },
                {
                  date: '2017-01-26',
                  value: 2700
                },
                {
                  date: '2017-01-27',
                  value: 3000
                }
              ]
            }
          ],
          colorSchema: ['#F4192B', '#437BF3']
        }, {
          dataByTopic: [
            {
              topicName: '本基金',
              topic: 123,
              dates: [
                {
                  date: '2017-01-11',
                  value: 400
                },
                {
                  date: '2017-01-12',
                  value: 800
                },
                {
                  date: '2017-01-13',
                  value: 1000
                },
                {
                  date: '2017-01-14',
                  value: 800
                },
                {
                  date: '2017-01-15',
                  value: 1200
                },
                {
                  date: '2017-01-16',
                  value: 1300
                },
                {
                  date: '2017-01-17',
                  value: 1550
                },
                {
                  date: '2017-01-18',
                  value: 1700
                },
                {
                  date: '2017-01-19',
                  value: 2560
                },
                {
                  date: '2017-01-20',
                  value: 2100
                },
                {
                  date: '2017-01-21',
                  value: 2200
                },
                {
                  date: '2017-01-22',
                  value: 1800
                },
                {
                  date: '2017-01-23',
                  value: 2800
                },
                {
                  date: '2017-01-24',
                  value: 2600
                },
                {
                  date: '2017-01-25',
                  value: 1300
                },
                {
                  date: '2017-01-26',
                  value: 1200
                },
                {
                  date: '2017-01-27',
                  value: 3500
                }
              ]
            }, {
              topicName: '新起点',
              topic: 345,
              dates: [
                {
                  date: '2017-01-11',
                  value: 900
                },
                {
                  date: '2017-01-12',
                  value: 550
                },
                {
                  date: '2017-01-13',
                  value: 700
                },
                {
                  date: '2017-01-14',
                  value: 800
                },
                {
                  date: '2017-01-15',
                  value: 950
                },
                {
                  date: '2017-01-16',
                  value: 1000
                },
                {
                  date: '2017-01-17',
                  value: 1550
                },
                {
                  date: '2017-01-18',
                  value: 1700
                },
                {
                  date: '2017-01-19',
                  value: 1560
                },
                {
                  date: '2017-01-20',
                  value: 1340
                },
                {
                  date: '2017-01-21',
                  value: 1600
                },
                {
                  date: '2017-01-22',
                  value: 1700
                },
                {
                  date: '2017-01-23',
                  value: 1300
                },
                {
                  date: '2017-01-24',
                  value: 1700
                },
                {
                  date: '2017-01-25',
                  value: 2500
                },
                {
                  date: '2017-01-26',
                  value: 2700
                },
                {
                  date: '2017-01-27',
                  value: 3000
                }
              ]
            }
          ],
          colorSchema: ['#F4192B', '#437BF3']
        }, {
          dataByTopic: [
            {
              topicName: '本基金',
              topic: 123,
              dates: [
                {
                  date: '2017-01-11',
                  value: 400
                },
                {
                  date: '2017-01-12',
                  value: 800
                },
                {
                  date: '2017-01-13',
                  value: 1000
                },
                {
                  date: '2017-01-14',
                  value: 1200
                },
                {
                  date: '2017-01-15',
                  value: 1250
                },
                {
                  date: '2017-01-16',
                  value: 1300
                },
                {
                  date: '2017-01-17',
                  value: 1550
                },
                {
                  date: '2017-01-18',
                  value: 1700
                },
                {
                  date: '2017-01-19',
                  value: 1560
                },
                {
                  date: '2017-01-20',
                  value: 1900
                },
                {
                  date: '2017-01-21',
                  value: 1800
                },
                {
                  date: '2017-01-22',
                  value: 1800
                },
                {
                  date: '2017-01-23',
                  value: 1950
                },
                {
                  date: '2017-01-24',
                  value: 2000
                },
                {
                  date: '2017-01-25',
                  value: 2100
                },
                {
                  date: '2017-01-26',
                  value: 2200
                },
                {
                  date: '2017-01-27',
                  value: 3500
                }
              ]
            }, {
              topicName: '新起点',
              topic: 345,
              dates: [
                {
                  date: '2017-01-11',
                  value: 500
                },
                {
                  date: '2017-01-12',
                  value: 550
                },
                {
                  date: '2017-01-13',
                  value: 600
                },
                {
                  date: '2017-01-14',
                  value: 510
                },
                {
                  date: '2017-01-15',
                  value: 950
                },
                {
                  date: '2017-01-16',
                  value: 1360
                },
                {
                  date: '2017-01-17',
                  value: 1550
                },
                {
                  date: '2017-01-18',
                  value: 1600
                },
                {
                  date: '2017-01-19',
                  value: 1560
                },
                {
                  date: '2017-01-20',
                  value: 1340
                },
                {
                  date: '2017-01-21',
                  value: 1600
                },
                {
                  date: '2017-01-22',
                  value: 1700
                },
                {
                  date: '2017-01-23',
                  value: 1300
                },
                {
                  date: '2017-01-24',
                  value: 1700
                },
                {
                  date: '2017-01-25',
                  value: 2500
                },
                {
                  date: '2017-01-26',
                  value: 2700
                },
                {
                  date: '2017-01-27',
                  value: 3000
                }
              ]
            }
          ],
          colorSchema: ['#F4192B', '#437BF3']
        }
      ],
      legendData: {
        legend: [
          {
            id: 1,
            quantity: 3243,
            name: '本基金'
          },
          {
            id: 2,
            quantity: 3,
            name: '新起点'
          }

        ],
        colorSchema: ['#F4192B', '#437BF3']
      },
      thisHeader: [
        {
          name: 'date',
          display: '日期'
        }, {
          name: 'product',
          display: '本产品',
          render: (h, params) => {
            console.log(h,params)
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisData.rows[params].product)
          }
        }, {
          name: 'data',
          display: '沪深300'
        }, {
          name: 'ranking',
          display: '同类排名'
        }
      ],
      thisData: {
        rows: [{
          date: '近一周',
          product: '1.79%',
          data: '2.08%',
          ranking:'111/526'
        }, {
          date: '近一月',
          product: '27.1%',
          data: '5.2%',
          ranking: '16/520'
        }, {
          date: '近三月',
          product: '13.1%',
          data: '12.97%',
          ranking: '22/511'
        }]
      },
      thisHeader2: [
        {
          name: 'date',
          display: '股票名称'
        }, {
          name: 'product',
          display: '占净值比',
          render: (h, params) => {
            console.log(h, params)
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisData.rows[params].product)
          }
        }, {
          name: 'data',
          display: '实时夹'
        }, {
          name: 'ranking',
          display: '涨跌幅'
        }
      ],
      thisData2: {
        rows: [{
          date: '腾不讯控股',
          product: '1.79%',
          data: '-',
          ranking: '-'
        }, {
          date: '中国平西',
          product: '27.1%',
          data: '-',
          ranking: '-'
        }, {
          date: '比奔迪电子',
          product: '13.1%',
          data: '-',
          ranking: '-'
        }]
      },
      thisHeader3: [
        {
          name: 'date',
          display: '日期'
        }, {
          name: 'product',
          display: '单位净值'
        }, {
          name: 'data',
          display: '累计净值',
          render: (h, params) => {
            console.log(h, params)
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisData.rows[params].data)
          }
        }, {
          name: 'ranking',
          display: '日涨跌幅(%)'
        }
      ],
      thisData3: {
        rows: [{
          date: '2018.01.12',
          product: '1.5370',
          data: '1.5370',
          ranking: '0.5200'
        }, {
          date: '2018.01.11',
          product: '1.5213',
          data: '1.5213',
          ranking: '-0.4600%'
        }, {
          date: '2018.01.10',
          product: '1.5360',
          data: '1.5360',
          ranking: '0.5200'
        }]
      },
      areaChartData: {
        data: [
          {
            date: '2011-10-20',
            name: '股票',
            value: 15420
          },
          {
            date: '2011-10-21T00:00:00Z',
            name: '股票',
            value: 15020
          },
          {
            date: '2011-10-22T00:00:00Z',
            name: '股票',
            value: 15120
          },
          {
            date: '2011-10-23T00:00:00Z',
            name: '股票',
            value: 15820
          },
          {
            date: '2011-10-24T00:00:00Z',
            name: '股票',
            value: 15620
          },
          {
            date: '2011-10-25T00:00:00Z',
            name: '股票',
            value: 15800
          },
          {
            date: '2011-10-26T00:00:00Z',
            name: '股票',
            value: 14020
          },
          {
            date: '2011-10-27T00:00:00Z',
            name: '股票',
            value: 13020
          },
          {
            date: '2011-10-28T00:00:00Z',
            name: '股票',
            value: 12920
          },
          {
            date: '2011-10-29T00:00:00Z',
            name: '股票',
            value: 11020
          },
          {
            date: '2011-10-30T00:00:00Z',
            name: '股票',
            value: 12320
          },
          {
            date: '2011-10-31T00:00:00Z',
            name: '股票',
            value: 11020
          }
        ],
        colorSchema: ['#437BF3']
      },
      areaChartData2:'',
      chartMore:[
        {
          data: [
            {
              date: '2011-10-20',
              name: '股票',
              value: 10420
            },
            {
              date: '2011-10-21T00:00:00Z',
              name: '股票',
              value: 10020
            },
            {
              date: '2011-10-22T00:00:00Z',
              name: '股票',
              value: 10120
            },
            {
              date: '2011-10-23T00:00:00Z',
              name: '股票',
              value: 11820
            },
            {
              date: '2011-10-24T00:00:00Z',
              name: '股票',
              value: 12620
            },
            {
              date: '2011-10-25T00:00:00Z',
              name: '股票',
              value: 13800
            },
            {
              date: '2011-10-26T00:00:00Z',
              name: '股票',
              value: 14020
            },
            {
              date: '2011-10-27T00:00:00Z',
              name: '股票',
              value: 15020
            },
            {
              date: '2011-10-28T00:00:00Z',
              name: '股票',
              value: 14920
            },
            {
              date: '2011-10-29T00:00:00Z',
              name: '股票',
              value: 11020
            },
            {
              date: '2011-10-30T00:00:00Z',
              name: '股票',
              value: 12320
            },
            {
              date: '2011-10-31T00:00:00Z',
              name: '股票',
              value: 11020
            }
          ],
          colorSchema: ['#437BF3']
        }, {
          data: [
            {
              date: '2011-10-20',
              name: '股票',
              value: 11420
            },
            {
              date: '2011-10-21T00:00:00Z',
              name: '股票',
              value: 12020
            },
            {
              date: '2011-10-22T00:00:00Z',
              name: '股票',
              value: 13120
            },
            {
              date: '2011-10-23T00:00:00Z',
              name: '股票',
              value: 11820
            },
            {
              date: '2011-10-24T00:00:00Z',
              name: '股票',
              value: 12620
            },
            {
              date: '2011-10-25T00:00:00Z',
              name: '股票',
              value: 13800
            },
            {
              date: '2011-10-26T00:00:00Z',
              name: '股票',
              value: 14020
            },
            {
              date: '2011-10-27T00:00:00Z',
              name: '股票',
              value: 15020
            },
            {
              date: '2011-10-28T00:00:00Z',
              name: '股票',
              value: 14920
            },
            {
              date: '2011-10-29T00:00:00Z',
              name: '股票',
              value: 15020
            },
            {
              date: '2011-10-30T00:00:00Z',
              name: '股票',
              value: 12320
            },
            {
              date: '2011-10-31T00:00:00Z',
              name: '股票',
              value: 13020
            }
          ],
          colorSchema: ['#437BF3']
        }, {
          data: [
            {
              date: '2011-10-20',
              name: '股票',
              value: 10420
            },
            {
              date: '2011-10-21T00:00:00Z',
              name: '股票',
              value: 13020
            },
            {
              date: '2011-10-22T00:00:00Z',
              name: '股票',
              value: 10120
            },
            {
              date: '2011-10-23T00:00:00Z',
              name: '股票',
              value: 12820
            },
            {
              date: '2011-10-24T00:00:00Z',
              name: '股票',
              value: 12620
            },
            {
              date: '2011-10-25T00:00:00Z',
              name: '股票',
              value: 13800
            },
            {
              date: '2011-10-26T00:00:00Z',
              name: '股票',
              value: 13020
            },
            {
              date: '2011-10-27T00:00:00Z',
              name: '股票',
              value: 15020
            },
            {
              date: '2011-10-28T00:00:00Z',
              name: '股票',
              value: 10920
            },
            {
              date: '2011-10-29T00:00:00Z',
              name: '股票',
              value: 11020
            },
            {
              date: '2011-10-30T00:00:00Z',
              name: '股票',
              value: 10320
            },
            {
              date: '2011-10-31T00:00:00Z',
              name: '股票',
              value: 11020
            }
          ],
          colorSchema: ['#437BF3']
        }, {
          data: [
            {
              date: '2011-10-20',
              name: '股票',
              value: 11420
            },
            {
              date: '2011-10-21T00:00:00Z',
              name: '股票',
              value: 10020
            },
            {
              date: '2011-10-22T00:00:00Z',
              name: '股票',
              value: 11120
            },
            {
              date: '2011-10-23T00:00:00Z',
              name: '股票',
              value: 11820
            },
            {
              date: '2011-10-24T00:00:00Z',
              name: '股票',
              value: 13620
            },
            {
              date: '2011-10-25T00:00:00Z',
              name: '股票',
              value: 13800
            },
            {
              date: '2011-10-26T00:00:00Z',
              name: '股票',
              value: 14020
            },
            {
              date: '2011-10-27T00:00:00Z',
              name: '股票',
              value: 11020
            },
            {
              date: '2011-10-28T00:00:00Z',
              name: '股票',
              value: 14920
            },
            {
              date: '2011-10-29T00:00:00Z',
              name: '股票',
              value: 11020
            },
            {
              date: '2011-10-30T00:00:00Z',
              name: '股票',
              value: 14320
            },
            {
              date: '2011-10-31T00:00:00Z',
              name: '股票',
              value: 11020
            }
          ],
          colorSchema: ['#437BF3']
        }
      ],
      icon:'choiceness',
      isOptional:false,
      isTip:true
    }
  },
  methods: {
    handleChange(index, key) {
      this[key] = index
      if(index===0){
        console.log(0)
        this.swiperHeight=664
      } else if (index === 1){
        console.log(1)
        this.swiperHeight = 530
      }else{
        console.log(2)
        this.swiperHeight = 600
      }
    },
    
    segment(index){
      console.log(index)
      this.lineData = this.data[index]
    },
    segment2(index) {
      console.log(index)
      // this.lineData = this.data[index]
      this.areaChartData2 = this.chartMore[index]
    },
    navigateBack() {
      ui.navigateBack()
    },
    optional(){
      if (this.isOptional){
        this.icon = 'choiceness'
        this.isOptional = false
      }else{
        this.icon ='crowd-funding01'
        this.isOptional=true
      }
    },
    close() {
      this.isTip = false
    }
  },
  mounted () {
    this.lineData = this.data[0]
    this.areaChartData2 = this.chartMore[0]
  }
}
