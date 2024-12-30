var myBarChart;
var update = 0;
document.getElementById('username').addEventListener('change', function() {
  var username = document.getElementById("username").value;
  //regular expression to check if username has atleast 1 capital letter, 1 special character, 1 number and is atleast 8 character long
   
});

function downloadCanvasAsImage() {
  var canvas = document.getElementById('myBarChart');
  var link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'chart.png';
  link.click();
}
function getMonthlyData(type) {
  var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  return months.map(function(month) {
    var input = document.getElementById(month + '-' + type);
    return input ? parseFloat(input.value) : 0;
  });
}

function myFunction() {
  var chartTab = document.getElementById('chart-tab');
  if (update == 1) {
    myBarChart.data.datasets[0].data = getMonthlyData('income');
    myBarChart.data.datasets[1].data = getMonthlyData('expenses');
    myBarChart.update(); // Update the existing chart instance
  } else {
    var ctx = document.getElementById('myBarChart').getContext('2d');
    myBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Income',
          data: getMonthlyData('income'),
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Expenses',
          data: getMonthlyData('expenses'),
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    update = 1;
  }
}
