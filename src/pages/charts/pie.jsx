import React,{Component} from 'react'
import * as echarts from 'echarts';

export default class Pie extends Component{
    state = {
        data: [
            {value: 150, name: '三七'},
            {value: 110, name: '辛夷'},
            {value: 150, name: '剪秋'},
            {value: 100, name: '君迁子'},
            {value: 150, name: '沉香'},
            {value: 90, name: '枳实'},
        ],
        celldata:["三七","辛夷","剪秋","君迁子","沉香","枳实"]
    };
    componentDidMount() {
        
        var myChart = echarts.init(document.getElementById("main"));
        myChart.setOption(
            {
                title: {
                    text: '各药品销量占比',
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: this.state.celldata
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        magicType: {
                            show: true,
                            type: ['pie', 'funnel']
                        },
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                series: [
                    {
                        name: '分数',
                        type: 'pie',
                        radius: [30, 110],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        data: this.state.data
                    }
                ]
            }            
        );
    }
    render() {
            return <div id = "main" style = { {  width: 1280, height: 500 }}> </div>; 
    }
}