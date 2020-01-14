import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-shop-report',
  templateUrl: './shop-report.component.html',
  styleUrls: ['./shop-report.component.css']
})
export class ShopReportComponent implements OnInit {
  options = [3, 2, 5, 12, 5, 6, 2, 8, 4, 10, 2, 12];
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
        data: this.options,
        type: undefined
      }
    ]
  });
  constructor() { }

  ngOnInit() {
  }

}
