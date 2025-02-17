const option = {
    theme: 'light',
    smooth: true,
    area: true,
    tooltip: {
        // 悬浮提示框的padding值，默认[14,16]
        padding: [8, 8],
        backgroundColor: 'rgba(255,255,255,1)',
        formatter: (params, ticket, callback) => {
            let htmlString = '';
            params.forEach((item, index) => {
                if (index === 0) {
                    htmlString += (item.name + '<br/>');
                }
                htmlString +=
                    '<div>' +
                    '<span style="display:inline-block;width:10px;height:10px;border-radius:5px;background-color:' +
                    item.color + ';"></span>' +
                    '<span style="margin-left:5px;color:#000000">' +
                    '<span style="display:inline-block;width:100px;">' + item.seriesName + ' User</span>' +
                    '<span style="font-weight:bold">' + item.value + '%</span>' +
                    '<span style="color:gray"> out </span>' +
                    '<span style="color:red">' + (100 - item.value) + '%</span>' +
                    '</span>' +
                    '</div>';
            });
            return htmlString
        },
    },
    data: [
        { 'Month': 'Jan', 'Domestic': 33 },
        { 'Month': 'Feb', 'Domestic': 27 },
        { 'Month': 'Mar', 'Domestic': 31 },
        { 'Month': 'Apr', 'Domestic': 23 },
        { 'Month': 'May', 'Domestic': 37 },
        { 'Month': 'Jun', 'Domestic': 36 },
        { 'Month': 'Jul', 'Domestic': 33 },
        { 'Month': 'Aug', 'Domestic': 33 },
        { 'Month': 'Sep', 'Domestic': 17 },
        { 'Month': 'Oct', 'Domestic': 40 },
        { 'Month': 'Nov', 'Domestic': 33 },
        { 'Month': 'Dec', 'Domestic': 32 }
    ],
    xAxis: {
        data: 'Month',
        fullGrid: true
    },
    yAxis: {
        name: 'Percentage (%)'
    }
};