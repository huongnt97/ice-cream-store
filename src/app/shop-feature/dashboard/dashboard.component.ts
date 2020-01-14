import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  options = [3, 2, 5, 12, 5, 6, 2, 8, 4, 10, 2, 12];
  chart = new Chart({
    chart: {
      type: 'line'
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
        data: this.options,
        type: undefined
      }
    ]
  });
  constructor() { }

  ngOnInit() {
  }
  update() {
    this.options = [3, 3, 3, 3, 5, 6, 2, 8, 4, 10, 2, 12];
    this.chart.removeSeries(0);
    this.chart.addSeries({
      name: 'Products',
      data: this.options,
      type: undefined
    }, true, true);
  }
}
