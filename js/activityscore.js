        // Teken de grafiek
        var ctx = document.getElementById('modalchart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar',
        // The data for our dataset
        // ['jan', 'feb', 'maa', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
        data: {
            labels: ["Likes", "Reacties", "Shares"],
                    datasets: [{
                        label: 'Aantal logins',
                        data: [43,15,12],
                        backgroundColor: "rgba(168, 54, 155, 0.05)",
                        borderColor: 'rgba(168, 54, 155,1)',
                        borderWidth: 1
                        }]
                    },
                options:{
                    aspectRatio: 3.3,
                    legend: {
                        display: false,
                    },
                    tooltips: {
                        backgroundColor: "rgb(255,255,255)",
                        bodyFontColor: "#858796",
                        titleMarginBottom: 10,
                        titleFontColor: '#6e707e',
                        titleFontSize: 14,
                        borderColor: '#dddfeb',
                        borderWidth: 1,
                        xPadding: 15,
                        yPadding: 15,
                        displayColors: false,
                        intersect: false,
                        mode: 'index',
                        caretPadding: 10
                    },
                    scales: {
                      xAxes: [{
                        gridLines: {
                          display: false,
                          drawBorder: false
                        }
                      }],
                      yAxes: [{
                        gridLines: {
                          color: "rgb(234, 236, 244)",
                          zeroLineColor: "rgb(234, 236, 244)",
                          drawBorder: false,
                          autoSkip: true,
                          borderDash: [2],
                          zeroLineBorderDash: [2]
                        },
                        ticks: {
                          beginAtZero: true,
                          autoSkip: true,
                          maxTicksLimit: 5
                        }
                      }],
                    }
                }
    })