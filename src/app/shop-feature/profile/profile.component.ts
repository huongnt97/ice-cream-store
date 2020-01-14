import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  store: User;
  parseGender = '';
  profileForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private spinner: NgxSpinnerService,
  ) { }
  ngOnInit() {
    if (localStorage.getItem('user') && localStorage.getItem('token')) {
      this.store = JSON.parse(localStorage.getItem('user'));
      console.log(this.store);
      if (this.store.gender === true) {
        this.parseGender = 'Male';
      } else {
        this.parseGender = 'Female';
      }
    }
    this.profileForm = this.formBuilder.group({
      id: [this.store.id],
      email: [this.store.email, [Validators.required, Validators.email]],
      fullName: [this.store.full_name, [Validators.required]],
      address: [this.store.address, [Validators.required]],
      numberphone: [this.store.phone, [Validators.required]],
      birthday: [this.datePipe.transform(this.store.birthday, 'dd/MM/yyyy'), [Validators.required]],
      gender: [this.store.gender === true ? 'Male' : 'Female'],
    });
  }
  get formProfile() {
    return this.profileForm.controls;
  }
  onSubmitProfile() {

  }
}
