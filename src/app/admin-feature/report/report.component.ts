import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  active = 0;
  item = ['SHOP 1', 'SHOP 2'];

  onClick(index: number) {
    this.active = index;
  }
  constructor(private route: Router) { }

  ngOnInit() {
    this.route.navigate(['/administration/report/shopReport']);
  }

}
