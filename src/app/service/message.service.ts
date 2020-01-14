import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private toastr: ToastrService) {

  }
  showSuccess(msg: string) {
    this.toastr.success(msg, '');
  }
  showError(msg: string) {
    this.toastr.error(msg, '');
  }
}
