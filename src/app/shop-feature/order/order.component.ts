import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  available = 0;
  deliver = 0;
  constructor() { }

  ngOnInit() {
  }
  confirm() {
    this.available = 50;
  }
  finish() {
    this.deliver = 50;
  }
}
