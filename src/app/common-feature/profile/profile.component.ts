import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  parseGender = '';
  profileForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private spinner: NgxSpinnerService,
  ) { }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    if (this.user && this.user.token) {

      console.log(this.user);
      if (this.user.gender === true) {
        this.parseGender = 'Male';
      } else {
        this.parseGender = 'Female';
      }
    }
    this.profileForm = this.formBuilder.group({
      id: [this.user.id],
      email: [this.user.email, [Validators.required, Validators.email]],
      fullName: [this.user.full_name, [Validators.required]],
      address: [this.user.address, [Validators.required]],
      numberphone: [this.user.phone, [Validators.required]],
      birthday: [this.datePipe.transform(this.user.birthday, 'dd/MM/yyyy'), [Validators.required]],
      gender: [this.user.gender === true ? 'Male' : 'Female'],
    });
  }
  get formProfile() {
    return this.profileForm.controls;
  }
  onSubmitProfile() {

  }
}
