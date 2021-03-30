<<<<<<< Updated upstream
=======
let url = 'http://localhost:8080/crawler_war_exploded/MeetingWordTrend';

>>>>>>> Stashed changes
var chartDom = document.getElementById('main');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: '热词走势'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
<<<<<<< Updated upstream
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
=======
        data: []
>>>>>>> Stashed changes
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
<<<<<<< Updated upstream
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        // {
        //     name: '搜索引擎',
        //     type: 'line',
        //     stack: '总量',
        //     data: [820, 932, 901, 934, 1290, 1330, 1320]
        // }
    ]
};

option && myChart.setOption(option);
=======
        data: []
    },
    yAxis: {
        type: 'value',
        min:0,

        interval:200
    },

    series: []
};

var vm = new Vue({
    el: "#MySelect",
    data: {
        year: [2015,2016,2017],
        keyCounts:[],
        meeting: "CVPR",
        list: {
            keywordCount: [{keyword:"word1","yearAndCount":[{"count":150,"year":2015},{"count":170,"year":2016},{"count":190,"year":2017}]},
                {keyword:"word2","yearAndCount":[{"count":120,"year":2015},{"count":180,"year":2016},{"count":390,"year":2017}]},
                {keyword:"word3","yearAndCount":[{"count":650,"year":2015},{"count":130,"year":2016},{"count":290,"year":2017}]}],
        //[{"keyword":"Training","yearAndCount":[{"count":192,"year":"2020"},{"count":0,"year":"2019"},{"count":184,"year":"2018"}]},{"keyword":"Task analysis","yearAndCount":[{"count":153,"year":"2020"},{"count":77,"year":"2019"},{"count":153,"year":"2018"}]},{"keyword":"Three-dimensional displays","yearAndCount":[{"count":125,"year":"2020"},{"count":0,"year":"2019"},{"count":88,"year":"2018"}]}]

        },
        option:"1",
    },
    methods: {
        fun() {
            if(this.option==1){
                this.meeting="CVPR";
                //alert("cvpr");
            }else if(this.option==2){
                this.meeting="ICCV";
                //alert("iccv");
            }else if(this.option==3){
                this.meeting="ECCV";
                //alert("eccv");
            }
            let data = JSON.stringify({
                meeting: this.meeting,
            });
            var that = this;
            axios.post(url, data).then(function (response) {
                that.list.keywordCount = response.data;
                for(var i=0;i<that.list.keywordCount[0].yearAndCount.length;i++){
                    var tpArray=[];
                    that.year[i]=that.list.keywordCount[0].yearAndCount[i].year;
                    for(var j=0;j<that.list.keywordCount.length;j++){
                        tpArray[j]=that.list.keywordCount[i].yearAndCount[j].count;
                    }
                    that.keyCounts[i]=(tpArray);

                    option.legend.data=[that.list.keywordCount[0].keyword.toString(),
                        that.list.keywordCount[1].keyword.toString(),
                        that.list.keywordCount[2].keyword.toString()];
                    option.xAxis.data = that.year;

                    option.series=[
                        {
                            name: that.list.keywordCount[0].keyword,
                            type: 'line',
                            data: that.keyCounts[0]
                        },
                        {
                            name: that.list.keywordCount[1].keyword,
                            type: 'line',
                            data: that.keyCounts[1]
                        },
                        {
                            name: that.list.keywordCount[2].keyword,
                            type: 'line',
                            data: that.keyCounts[2]
                        },
                    ];
                    option && myChart.setOption(option);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
    },
});
>>>>>>> Stashed changes
