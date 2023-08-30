import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
 
    
    

  ngOnInit() {
    this.createAreaChart1();
    this.createAreaChart2();
    this.createAreaChart3();
    
  }createAreaChart1() {
    const areaChartOptions = {
      series: [
        {
          data: [30, 70,40 ,90,50,140],
           
        },
        
      ],
      chart: {
        type: 'area',
        background: 'transparent',
        height: 120,
        width: 120,
        toolbar: {
          show: false,
        },
        
        stroke: {
          show: false, // Hide border under the chart
        },
      },
      colors: ['#5051F9'],
      dataLabels: {
        enabled: false,
      },
      fill: {
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.1,
          shadeIntensity: 1,
          stops: [0, 100],
          type: 'vertical',
        },
        type: 'gradient',
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false, // Hide the x-axis line
        },
        grid: {
          show: false, // Hide the grid lines along the x-axis
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
    };
  
    const areaChart = new ApexCharts(
      document.querySelector('#area-chart1'),
      areaChartOptions
    );
    areaChart.render();
  }
  
  
  createAreaChart2() {
    const areaChartOptions = {
      series: [
        {
          data: [30, 70,40 ,140,130,180],
              
        },
        
      ],
      chart: {
        type: 'area',
        background: 'transparent',
        height: 120,
        width: 120,
        toolbar: {
          show: false,
        },
        stroke: {
          show: false, // Hide border under the chart
        },
      },
      colors: ['#1EA7FF'],
      dataLabels: {
        enabled: false,
      },
      fill: {
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.1,
          shadeIntensity: 1,
          stops: [0, 100],
          type: 'vertical',
        },
        type: 'gradient',
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false, // Hide the x-axis line
        },
        grid: {
          show: false, // Hide the grid lines along the x-axis
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
    };
  
    const areaChart = new ApexCharts(
      document.querySelector('#area-chart2'),
      areaChartOptions
    );
    areaChart.render();
  }
  createAreaChart3() {
    const areaChartOptions = {
      series: [
        {
          data: [30, 70,40 ,120,90,140],
              
        },
        
      ],
      chart: {
        type: 'area',
        background: 'transparent',
        height: 120,
        width: 120,
        toolbar: {
          show: false,
        },
        stroke: {
          show: false, // Hide border under the chart
        },
      },
      colors: ['#FF614C'],
      dataLabels: {
        enabled: false,
      },
      fill: {
        gradient: {
          opacityFrom: 0.5,
          opacityTo: 0.1,
          shadeIntensity: 1,
          stops: [0, 100],
          type: 'vertical',
        },
        type: 'gradient',
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false, // Hide the x-axis line
        },
        grid: {
          show: false, // Hide the grid lines along the x-axis
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
    };
  
    const areaChart = new ApexCharts(
      document.querySelector('#area-chart3'),
      areaChartOptions
    );
    areaChart.render();
  }

 


  
}
