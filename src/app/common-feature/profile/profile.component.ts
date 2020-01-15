import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from './../../service/user.service';
import { MessageService } from './../../service/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  parseGender = '';
  profileForm: FormGroup;
  submitted = false;
  formChangeAccount: FormGroup;
  isCorrectPassword = false;
  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private spinner: NgxSpinnerService,
    private userService: UserService,
    private msg: MessageService,
    private rounter: Router
  ) { }
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.profileForm = this.formBuilder.group({
      id: [this.user.id],
      email: [this.user.email, [Validators.required, Validators.email]],
      fullName: [this.user.full_name, [Validators.required]],
      address: [this.user.address, [Validators.required]],
      numberphone: [this.user.phone, [Validators.required]],
      birthday: [this.datePipe.transform(this.user.birthday, 'dd/MM/yyyy'), [Validators.required]],
      gender: [this.user.gender === true ? 'Male' : 'Female'],
    });
    this.formChangeAccount = this.formBuilder.group({
      currentPassword: ['', [Validators.required, Validators.minLength(6)]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get formProfile() {
    return this.profileForm.controls;
  }
  get getformAccount() {
    return this.formChangeAccount.controls;
  }
  onSubmitProfile() {

  }
  onSubmit() {
    this.submitted = true;
    if (this.formChangeAccount.invalid) {
      return;
    }
    this.spinner.hide();
    const pass = this.formChangeAccount.value;
    this.changePassword(pass.currentPassword, pass.newPassword);
  }
  changePassword(old_password: string, new_password: string) {
    this.spinner.show();

    this.userService.changePassword({ old_password, new_password }).subscribe(
      res => {
        console.log(res);
        if (res === false) {
          this.isCorrectPassword = true;
        }
        this.isCorrectPassword = false;
        this.msg.showSuccess('Successful');
        this.spinner.hide();
      },
      err => {
        this.msg.showError('Error. try latter');
        this.spinner.hide();
      },
      () => {
        this.rounter.navigate(['']);

      }
    );
  }
}
