import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-reply-register',
  templateUrl: './reply-register.component.html',
  styleUrls: ['./reply-register.component.css']
})
export class ReplyRegisterComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  back() {
    this.location.back();
  }
}
