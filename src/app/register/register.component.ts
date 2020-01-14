import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MessageService } from '../service/message.service';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registered = false;

  constructor(
    private authen: AuthenticationService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private msg: MessageService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      fullName: ['', [Validators.required]],
      address: ['', [Validators.required]],
      numberphone: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      gender: [true],
      status: [true]
    });
  }
  ngOnInit() {
  }
  get form() { return this.registerForm.controls; }
  onRegisterSubmit() {
    this.registered = true;
    this.spinner.show();
    if (this.registerForm.invalid) {
      return;
    }
    this.register();
  }
  register() {
    const body = this.registerForm.value;
    body.birthday = this.datePipe.transform(body.birthday, 'yyyy/MM/dd');
    console.log(this.registerForm.value);
    this.authen.register(this.registerForm.value).subscribe(
      res => {
        this.msg.showSuccess('Register successful');
        console.log(res);
        this.router.navigate(['/reply']);
        setTimeout(() => {
          this.spinner.hide();
        });
      },
      err => {
        this.msg.showError('Register fail. Please try again later');
        console.log(err);
      }
    );
  }
}
