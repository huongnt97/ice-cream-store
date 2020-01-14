import { UserService } from '../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { MessageService } from '../../service/message.service';
import { AuthenticationService } from '../../service/authentication.service';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';
import { Role } from '../../models/role';
import { FormGroup, FormArrayName, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
import { finalize } from 'rxjs/operators'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  currentUser: User;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private authen: AuthenticationService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private msg: MessageService
  ) { }
  condition: boolean;
  submitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.checkLogin();

  }
  checkLogin() {
    if (localStorage.getItem('user') && localStorage.getItem('token')) {
      this.currentUser = JSON.parse(localStorage.getItem('user'));
      if (this.currentUser.role === Role.Admin) {
        this.router.navigate(['/administration/report']);
      } else if (this.currentUser.role === Role.Store) {
        this.router.navigate(['/home/dashboard']);
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
  get formlogin() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.login();
  }
  login(): void {
    this.spinner.show();
    this.authen.login(this.loginForm.value)
      .pipe(
        finalize(() => {

        })
      )
      .subscribe(
        res => {
          if (typeof (res) === 'string') {
            if (res === 'Login faill') {
              this.condition = true;
              //this.msg.showError('Error,lease try again later.');
              this.spinner.hide();
              return;
            }
          }
          this.user = JSON.parse(res);
          this.spinner.hide();
          if (this.user.role) {
            localStorage.setItem('user', JSON.stringify(this.user));
            if (this.user.role === Role.Admin) {
              this.router.navigate(['/administration/report']);
            } else if (this.user.role === Role.Store) {
              this.router.navigate(['/home/dashboard']);
            } else {
              this.router.navigate(['/login']);
              this.condition = false;
              this.msg.showError('You are not authorized');
            }
          }
        },
        err => {
          this.spinner.hide();
          console.log(err);
          this.msg.showError('An error occurred, please try again later.');
          this.condition = false;
          this.router.navigate(['login']);
        }
      );
  }

}


