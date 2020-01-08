import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options = [];
  chart = new Chart({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },
    yAxis: {
      title: {
        text: 'Products'
      }
    },
    title: {
      text: 'Sales report'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Products',
        data: [3, 2, 5, 12, 5, 6, 2, 8, 4, 10, 2, 12],
        type: undefined
      }
    ]
  });
  constructor() { }

  ngOnInit() {
  }
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}
