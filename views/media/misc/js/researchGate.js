function cases(actual_arr, predict_arr, date_arr) {
    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Corona Cases Prediction'
        },
        xAxis: {
            categories: date_arr
        },
        yAxis: {
            title: {
                text: 'Number of Cases'
            }
        },
        series: [{
            name: 'Prediction',
            data: predict_arr
        }, {
            name: 'Actual',
            data: actual_arr
        }, ],
    });
}

function cured(actual_arr, predict_arr, date_arr) {
    Highcharts.chart('container2', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Cured Patients Prediction'
        },
        xAxis: {
            categories: date_arr
        },
        yAxis: {
            title: {
                text: 'Patients Cured'
            }
        },
        series: [{
            name: 'Prediction',
            data: predict_arr
        }, {
            name: 'Actual',
            data: actual_arr
        }, ],
    });
}

function deaths(actual_arr, predict_arr, date_arr) {
    Highcharts.chart('container3', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Corona Deaths Prediction'
        },
        xAxis: {
            categories: date_arr
        },
        yAxis: {
            title: {
                text: 'Number of Death'
            }
        },
        series: [{
            name: 'Prediction',
            data: predict_arr
        }, {
            name: 'Actual',
            data: actual_arr
        }, ],
    });
}

$(document).ready(function() {
    console.log("now running");
    var myurl = 'https://elcomrades-corona-api.herokuapp.com/getdata?n=7&cap=30000&key=whyshoulditellyou';
    $.ajax({
        type: "get",
        url: myurl,
        dataType: 'json',
        success: function(results) {
            console.log("results are", results);
            $(".waiting").hide();
            cases(results["cases"]["actual"], results["cases"]["predict"], results["cases"]["date"]);
            cured(results["cured"]["actual"], results["cured"]["predict"], results["cured"]["date"]);
            deaths(results["deaths"]["actual"], results["deaths"]["predict"], results["deaths"]["date"]);
        },
        error: function(request, error) {
            console.log("There is an error. " + error);
        },
    });

    // $('#aboutSlider').carousel({
    //     interval: 2000
    // })

});