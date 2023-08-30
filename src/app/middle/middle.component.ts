import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit{
 constructor(){}
 
  ngOnInit(): void {
    this.createBigChart()
    
  }
  
  
  createBigChart() {
    const areasChartOptions = {
      series: [
        {
          
          data: [50,100, 110, 330, 280, 170, 210, 180,320, 295, 170],
        },
        {
          
          data: [0, 55, 200, 300, 190, 220, 20 ,40, 80, 170, 110],
        },
      ],
      chart: {
        type: 'area',
        background: 'transparent',
        height: 370,
        width: 950,
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      colors: ['#5051F9', '#1EA7FF'],
      labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov', 'Dec','Jan', 'Feb', 'Mar', 'Apr'],
      dataLabels: {
        enabled: false,
      },
      fill: {
        gradient: {
          opacityFrom: 0.7,
          opacityTo: 0.1,
          shadeIntensity: 1,
          stops: [0, 100],
          type: 'vertical',
        },
        type: 'gradient',
      },
      grid: {
        borderColor: '#55596e',
        yaxis: {
          lines: {
            show: true,
          },
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      legend: {
        labels: {
          colors: '#fffffff',
        },
        show: false,
        position: 'top',
      },
      markers: {
        size: 4,
        strokeColors: '#1b2635',
        strokeWidth: 2,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        axisBorder: {
          color: '#55596e',
          show: true,
        },
        axisTicks: {
          color: '#55596e',
          show: true,
        },
        labels: {
          offsetY: 3,
          style: {
            colors: '#000000',
          },
        },
      },
      yaxis: [
        {
          title: {
            
            style: {
              color: '#f5f7ff',
            },
          },
          labels: {
            style: {
              colors: ['#000000'],
            },
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark',
      },
    };

    const areasChart = new ApexCharts(
      document.querySelector('#areas-chart'),
      areasChartOptions
    );
    areasChart.render();
  }
}


