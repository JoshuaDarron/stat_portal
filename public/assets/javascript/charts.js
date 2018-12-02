window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Recent Games Played"
        },
        axisY: {
            title: "Reserves(MMbbl)"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "MMbbl = one million barrels",
            dataPoints: [
                { y: 300878, label: "Venezuela" },
                { y: 266455, label: "Saudi" },
                { y: 169709, label: "Canada" },
                { y: 158400, label: "Iran" },
                { y: 142503, label: "Iraq" },
                { y: 101500, label: "Kuwait" },
                { y: 97800, label: "UAE" },
                { y: 80000, label: "Russia" }
            ]
        }]
    });
    chart.render();

}



// window.onload = function () {

//     var chart = new CanvasJS.Chart("chartContainer", {
//         title: {
//             text: "Weekly Weather Forecast"
//         },
//         axisY: {
//             includeZero: false,
//             suffix: " °C",
//             maximum: 40,
//             gridThickness: 0
//         },
//         toolTip: {
//             shared: true,
//             content: "{name} </br> <strong>Temperature: </strong> </br> Min: {y[0]} °C, Max: {y[1]} °C"
//         },
//         data: [{
//             type: "rangeSplineArea",
//             fillOpacity: 0.1,
//             color: "#91AAB1",
//             indexLabelFormatter: formatter,
//             dataPoints: [
//                 { label: "Monday", y: [15, 26], name: "rainy" },
//                 { label: "Tuesday", y: [15, 27], name: "rainy" },
//                 { label: "Wednesday", y: [13, 27], name: "sunny" },
//                 { label: "Thursday", y: [14, 27], name: "sunny" },
//                 { label: "Friday", y: [15, 26], name: "cloudy" },
//                 { label: "Saturday", y: [17, 26], name: "sunny" },
//                 { label: "Sunday", y: [16, 27], name: "rainy" }
//             ]
//         }]
//     });
//     chart.render();

//     var images = [];

//     addImages(chart);

//     function addImages(chart) {
//         for (var i = 0; i < chart.data[0].dataPoints.length; i++) {
//             var dpsName = chart.data[0].dataPoints[i].name;
//             if (dpsName == "cloudy") {
//                 images.push($("<img>").attr("src", "https://canvasjs.com/wp-content/uploads/images/gallery/gallery-overview/cloudy.png"));
//             } else if (dpsName == "rainy") {
//                 images.push($("<img>").attr("src", "https://canvasjs.com/wp-content/uploads/images/gallery/gallery-overview/rainy.png"));
//             } else if (dpsName == "sunny") {
//                 images.push($("<img>").attr("src", "https://canvasjs.com/wp-content/uploads/images/gallery/gallery-overview/sunny.png"));
//             }

//             images[i].attr("class", dpsName).appendTo($("#chartContainer>.canvasjs-chart-container"));
//             positionImage(images[i], i);
//         }
//     }

//     function positionImage(image, index) {
//         var imageCenter = chart.axisX[0].convertValueToPixel(chart.data[0].dataPoints[index].x);
//         var imageTop = chart.axisY[0].convertValueToPixel(chart.axisY[0].maximum);

//         image.width("40px")
//             .css({
//                 "left": imageCenter - 20 + "px",
//                 "position": "absolute", "top": imageTop + "px",
//                 "position": "absolute"
//             });
//     }

//     $(window).resize(function () {
//         var cloudyCounter = 0, rainyCounter = 0, sunnyCounter = 0;
//         var imageCenter = 0;
//         for (var i = 0; i < chart.data[0].dataPoints.length; i++) {
//             imageCenter = chart.axisX[0].convertValueToPixel(chart.data[0].dataPoints[i].x) - 20;
//             if (chart.data[0].dataPoints[i].name == "cloudy") {
//                 $(".cloudy").eq(cloudyCounter++).css({ "left": imageCenter });
//             } else if (chart.data[0].dataPoints[i].name == "rainy") {
//                 $(".rainy").eq(rainyCounter++).css({ "left": imageCenter });
//             } else if (chart.data[0].dataPoints[i].name == "sunny") {
//                 $(".sunny").eq(sunnyCounter++).css({ "left": imageCenter });
//             }
//         }
//     });

//     function formatter(e) {
//         if (e.index === 0 && e.dataPoint.x === 0) {
//             return " Min " + e.dataPoint.y[e.index] + "°";
//         } else if (e.index == 1 && e.dataPoint.x === 0) {
//             return " Max " + e.dataPoint.y[e.index] + "°";
//         } else {
//             return e.dataPoint.y[e.index] + "°";
//         }
//     }

// }