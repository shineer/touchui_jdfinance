// fundRank.js
let current=0
export default {
  data() {
    return {
      statusBar:ui.STATUS_BAR_HEIGHT,
      thisHeader: [
        {
          name: 'date',
          sort: false,
          headerAlign: 'left',
          width: '120',
          fixed: 'left',
          render: (h, params) => {
            return h('div', {
              style: {

              }
            }, [h('span', {
              style: {
                display: 'block',
                fontSize: '12px',
                color: '#313131',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
                width:'100px'
              }
              }, this.thisDatas[current].rows[params].name),
            h('span', {
              style: {
                display: 'inline-block',
                fontSize: '10px',
                color: '#9E9E9E'
              }
            }, this.thisDatas[current].rows[params].number)
              ])
          },
          headerRender: (h) => {
            return h('div', {
              style: {
                lineHeight: '50px'
              }
            }, '基金名称')
          }
        }, {
          name: 'net_value',
          sort: false,
          headerAlign: 'center',
          align: 'center',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '单位净值')
              ])
          },
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisDatas[current].rows[params].net_value)
          }
        }, {
          name: 'week_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '周涨跌幅')
              ])
          }
        }, {
          name: 'month_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '月涨跌幅')
              ])
          },
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisDatas[current].rows[params].month_rise)
          }
        }, {
          name: 'quarter_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '季涨跌幅')
              ])
          }
        }, {
          name: 'half_year_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '半年涨跌幅')
              ])
          },
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisDatas[current].rows[params].half_year_rise)
          }
        }, {
          name: 'this_year_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '今年涨跌幅')
              ])
          }
        }, {
          name: 'year_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '60px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '年涨跌幅')
              ])
          },
          render: (h, params) => {
            return h('span', {
              style: {
                color: '#F77B2B'
              }
            }, this.thisDatas[current].rows[params].year_rise)
          }
        }, {
          name: 'three_year_rise',
          sort: true,
          headerAlign: 'center',
          align: 'center',
          headerRender: (h) => {
            return h('div', {
              style: {
                width: '70px',
                lineHeight: '50px',
                display: 'inline-block'
              }
            }, [
                h('span', {}, '近三年涨跌幅')
              ])
          }
        }
      ],
      thisDatas:[
        {
          rows: [{
            name: '天虹巨力A',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力B',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
              name: '昌盛纯在B',
            number: '004541',
            net_value: '3.6796',
            week_rise: '12.26%',
            month_rise: '22.56%',
            quarter_rise: '56.23%',
            half_year_rise: '18.234%',
            this_year_rise: '28.36%',
            year_rise: '13.025%',
            three_year_rise: '21.2566%'
          }, {
              name: '捧花地产B',
            number: '005641',
            net_value: '14.6796',
            week_rise: '35.26%',
            month_rise: '16.56%',
            quarter_rise: '24.23%',
            half_year_rise: '15.234%',
            this_year_rise: '26.36%',
            year_rise: '12.025%',
            three_year_rise: '35.236%'
          }, {
              name: '万家新力B',
            number: '001321',
            net_value: '15.6796',
            week_rise: '10.36%',
            month_rise: '38.56%',
            quarter_rise: '17.73%',
            half_year_rise: '48.234%',
            this_year_rise: '11.36%',
            year_rise: '49.025%',
            three_year_rise: '29.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '29.556',
            week_rise: '26.26%',
            month_rise: '47.212%',
            quarter_rise: '274.713%',
            half_year_rise: '76.3234%',
            this_year_rise: '528.346%',
            year_rise: '315.025%',
            three_year_rise: '19.236%'
          }, {
              name: '一方霞飞行业B',
            number: '004513',
            net_value: '47.6796',
            week_rise: '8.26%',
            month_rise: '3.56%',
            quarter_rise: '15.73%',
            half_year_rise: '18.234%',
            this_year_rise: '78.36%',
            year_rise: '29.025%',
            three_year_rise: '20.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力C',
            number: '001641',
            net_value: '14.6796',
            week_rise: '35.26%',
            month_rise: '16.56%',
            quarter_rise: '24.23%',
            half_year_rise: '15.234%',
            this_year_rise: '26.36%',
            year_rise: '12.025%',
            three_year_rise: '35.236%'
          }, {
              name: '昌盛纯在C',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
              name: '捧花地产C',
              net_value: '14.6796',
              week_rise: '35.26%',
              month_rise: '16.56%',
              quarter_rise: '24.23%',
              half_year_rise: '15.234%',
              this_year_rise: '26.36%',
              year_rise: '12.025%',
              three_year_rise: '35.236%'
          }, {
              name: '万家新力C',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
              name: '南方地产连结C',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力D',
            number: '001641',
            net_value: '14.6796',
            week_rise: '35.26%',
            month_rise: '16.56%',
            quarter_rise: '24.23%',
            half_year_rise: '15.234%',
            this_year_rise: '26.36%',
            year_rise: '12.025%',
            three_year_rise: '35.236%'
          }, {
              name: '昌盛纯在D',
            number: '004541',
            net_value: '42.6796',
            week_rise: '140.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
              name: '捧花地产D',
              number: '004542',
              net_value: '124.6796',
              week_rise: '35.26%',
              month_rise: '16.56%',
              quarter_rise: '24.23%',
              half_year_rise: '15.234%',
              this_year_rise: '26.36%',
              year_rise: '12.025%',
              three_year_rise: '35.236%'
          }, {
              name: '万家新力D',
            number: '001321',
            net_value: '112.6796',
            week_rise: '120.26%',
            month_rise: '312.56%',
            quarter_rise: '124.73%',
            half_year_rise: '416.234%',
            this_year_rise: '128.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
              name: '南方地产连结D',
              number: '004241',
              net_value: '124.6796',
              week_rise: '315.26%',
              month_rise: '16.56%',
              quarter_rise: '224.23%',
              half_year_rise: '215.234%',
              this_year_rise: '26.36%',
              year_rise: '121.0225%',
              three_year_rise: '35.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '425.6796',
            week_rise: '122.26%',
            month_rise: '512.56%',
            quarter_rise: '122.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '213.025%',
            three_year_rise: '821.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力E',
            number: '001641',
            net_value: '14.6796',
            week_rise: '35.26%',
            month_rise: '16.56%',
            quarter_rise: '24.23%',
            half_year_rise: '15.234%',
            this_year_rise: '26.36%',
            year_rise: '12.025%',
            three_year_rise: '35.236%'
          }, {
              name: '昌盛纯在E',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
              name: '捧花地产E',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
              name: '万家新力E',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
              name: '南方地产连结E',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
              net_value: '14.6796',
              week_rise: '35.26%',
              month_rise: '16.56%',
              quarter_rise: '24.23%',
              half_year_rise: '15.234%',
              this_year_rise: '26.36%',
              year_rise: '12.025%',
              three_year_rise: '35.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力F',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
              name: '昌盛纯在F',
            number: '004541',
              net_value: '14.6796',
              week_rise: '35.26%',
              month_rise: '16.56%',
              quarter_rise: '24.23%',
              half_year_rise: '15.234%',
              this_year_rise: '26.36%',
              year_rise: '12.025%',
              three_year_rise: '35.236%'
          }, {
              name: '捧花地产F',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
              name: '万家新力F',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
              name: '南方地产连结F',
              net_value: '14.6796',
              week_rise: '35.26%',
              month_rise: '16.56%',
              quarter_rise: '24.23%',
              half_year_rise: '15.234%',
              this_year_rise: '26.36%',
              year_rise: '12.025%',
              three_year_rise: '35.236%'
          }, {
              name: '一方霞飞行业F',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力G',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
              name: '昌盛纯在G',
              net_value: '14.6796',
              week_rise: '35.26%',
              month_rise: '16.56%',
              quarter_rise: '24.23%',
              half_year_rise: '15.234%',
              this_year_rise: '26.36%',
              year_rise: '12.025%',
              three_year_rise: '35.236%'
          }, {
              name: '捧花地产G',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
              name: '万家新力G',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
              name: '南方地产连结G',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力H',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在A',
            number: '004541',
              net_value: '14.6796',
              week_rise: '35.26%',
              month_rise: '16.56%',
              quarter_rise: '24.23%',
              half_year_rise: '15.234%',
              this_year_rise: '26.36%',
              year_rise: '12.025%',
              three_year_rise: '35.236%'
          }, {
            name: '捧花地产',
            number: '005641',
            net_value: '12.6796',
            week_rise: '31.26%',
            month_rise: '10.56%',
            quarter_rise: '24.23%',
            half_year_rise: '16.234%',
            this_year_rise: '28.36%',
            year_rise: '12.025%',
            three_year_rise: '31.236%'
          }, {
            name: '万家新力',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
            name: '南方地产连结A',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
            net_value: '45.6796',
            week_rise: '12.26%',
            month_rise: '52.56%',
            quarter_rise: '12.73%',
            half_year_rise: '16.234%',
            this_year_rise: '58.36%',
            year_rise: '23.025%',
            three_year_rise: '81.236%'
          }]
        }, {
          rows: [{
            name: '天虹巨力I',
            number: '001641',
            net_value: '1.6796',
            week_rise: '30.26%',
            month_rise: '30.56%',
            quarter_rise: '14.23%',
            half_year_rise: '56.234%',
            this_year_rise: '78.36%',
            year_rise: '1.025%',
            three_year_rise: '1.236%'
          }, {
            name: '昌盛纯在I',
            number: '004541',
            net_value: '2.6796',
            week_rise: '10.26%',
            month_rise: '20.56%',
            quarter_rise: '19.23%',
            half_year_rise: '16.234%',
            this_year_rise: '38.36%',
            year_rise: '12.025%',
            three_year_rise: '21.236%'
          }, {
            name: '捧花地产I',
            number: '005641',
              net_value: '14.6796',
              week_rise: '35.26%',
              month_rise: '16.56%',
              quarter_rise: '24.23%',
              half_year_rise: '15.234%',
              this_year_rise: '26.36%',
              year_rise: '12.025%',
              three_year_rise: '35.236%'
          }, {
              name: '万家新力I',
            number: '001321',
            net_value: '12.6796',
            week_rise: '10.26%',
            month_rise: '32.56%',
            quarter_rise: '14.73%',
            half_year_rise: '46.234%',
            this_year_rise: '18.36%',
            year_rise: '41.025%',
            three_year_rise: '21.236%'
          }, {
              name: '南方地产连结AI',
            number: '007895',
            net_value: '23.556',
            week_rise: '20.26%',
            month_rise: '41.212%',
            quarter_rise: '24.713%',
            half_year_rise: '16.3234%',
            this_year_rise: '28.346%',
            year_rise: '15.025%',
            three_year_rise: '19.236%'
          }, {
            name: '一方霞飞行业',
            number: '004513',
              net_value: '14.6796',
              week_rise: '35.26%',
              month_rise: '16.56%',
              quarter_rise: '24.23%',
              half_year_rise: '15.234%',
              this_year_rise: '26.36%',
              year_rise: '12.025%',
              three_year_rise: '35.236%'
          }]
        }
      ],
      tabledatas: {},
      editText: '编辑',
      isEdit: true,
      //拖拽
      windowWidth: ui.WIN_WIDTH,
      el: 0,
      list: [{
        name: '前端',
        number: 378456,
        id: 'id1',
        height: 70,
        canSwipe: false
      }, {
        name: '前端',
        number: 378456,
        id: 'id2',
        height: 70,
        canSwipe: false
      }]
    }
  },
  methods: {
    changeTab(index) {
      current=index
      this.tabledatas = this.thisDatas[current]
    },
    navigateBack() {
      ui.navigateBack()
    },
    showFullScreenSearch() {
      ui.app.searchShow = true
      ui.setStatusBarStyle({ style: 'dark' })
    }
  },
  mounted() {
    this.tabledatas = this.thisDatas[current]
  }
}
