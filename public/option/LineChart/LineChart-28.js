const option = {
    theme: 'light',
    padding: [50, 30, 20, 20],
    legend: {
        show: false,
    },
    // 当值为 null 时表示该线不显示，当值为 0 时表示该线仍然有值
    data: [
        { 'Month': 'Jan', 'Domestic': 33 },
        { 'Month': 'Feb', 'Domestic': 28 },
        { 'Month': 'Mar', 'Domestic': 32 },
        { 'Month': 'Apr', 'Domestic': 30 },
        { 'Month': 'May', 'Domestic': 38 },
        { 'Month': 'Jun', 'Domestic': 36 },
        { 'Month': 'Jul', 'Domestic': 42 },
        { 'Month': 'Aug', 'Domestic': 21 },
        { 'Month': 'Sep', 'Domestic': 18 },
        { 'Month': 'Oct', 'Domestic': 21 },
        { 'Month': 'Nov', 'Domestic': 28 },
        { 'Month': 'Dec', 'Domestic': 18 }
    ],
    xAxis: {
        data: 'Month'
    },
    yAxis: {
        name: 'Unit'
    },
    series: [
        {
            name: 'Domestic',  // 覆盖 Domestic 线条的样式
            smooth: true,
            lineStyle: {
                color: {
                    type: 'linear',
                    x: 0, y: 0,
                    x2: 1, y2: 0,
                    colorStops: [{
                        offset: 0, color: '#5990fd'
                    }, {
                        offset: 1, color: '#f43147'
                    }],
                }
            }
        }
    ]
};


