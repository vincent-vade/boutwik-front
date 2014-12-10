
// GRAPH CA
$(function () {
  $('#ca').highcharts({
    chart:{
      type: 'column',
    },
    title: {
      text: 'Chiffres D\'affaire'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        month: '%Y'
      }
    },
    yAxis: {
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
      }
    },
    series: [
    {
      name: 'Chiffres D\'affaire',
      data: [

      [Date.UTC(2005,2,31), 7.29],
      [Date.UTC(2006,2,31), 8.70],
      [Date.UTC(2007,2,31), 9.41],
      [Date.UTC(2008,2,31), 11.30],
      [Date.UTC(2009,2,31), 11.30],
      [Date.UTC(2010,2,31), 11.30]

      ]
    }

    ]
  });
});

//GRAPH BENEF

$(function () {
  $('#benef').highcharts({
    chart:{
      type: 'column',
    },
    title: {
      text: 'Bénéfices'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        year: '%Y'
      }
    },
    yAxis: {
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
      }
    },
    series: [
    {
      name: 'Bénéfices',
      data: [

      [Date.UTC(2005,2,31), 7.29],
      [Date.UTC(2006,2,31), 8.70],
      [Date.UTC(2007,2,31), 9.41],
      [Date.UTC(2008,2,31), 11.30],
      [Date.UTC(2009,2,31), 11.30],
      [Date.UTC(2010,2,31), 11.30]

      ]
    }

    ]
  });
});

$(function () {
  $('#visit').highcharts({
    chart:{
      type: 'line',
    },
    title: {
      text: 'Visites'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        year: '%Y'
      }
    },
    yAxis: {
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
      }
    },
    series: [
    {
      name: 'Visites',
      data: [

      [Date.UTC(2005,2,31), 7.29],
      [Date.UTC(2006,2,31), 8.70],
      [Date.UTC(2007,2,31), 9.41],
      [Date.UTC(2008,2,31), 11.30],
      [Date.UTC(2009,2,31), 11.30],
      [Date.UTC(2010,2,31), 11.30]

      ]
    }

    ]
  });
});
//COMMAND
$(function () {
  $('#command').highcharts({
    chart:{
      type: 'area',
    },
    title: {
      text: 'Recapitulatif commandes'
    },
    xAxis: {
      type: 'datetime',
      dateTimeLabelFormats: {
        year: '%Y'
      }
    },
    yAxis: {
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
        }
      }
    },
    series: [
    {
      name: 'Recapitulatif commandes',
      data: [

      [Date.UTC(2005,2,31), 7.29],
      [Date.UTC(2006,2,31), 8.70],
      [Date.UTC(2007,2,31), 9.41],
      [Date.UTC(2008,2,31), 11.30],
      [Date.UTC(2009,2,31), 11.30],
      [Date.UTC(2010,2,31), 11.30]

      ]
    }

    ]
  });
});
