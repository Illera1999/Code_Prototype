import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private modal: ModalService) { }

  openLogin() {
    this.modal.openDialog(LoginComponent, "500px", "600px");
  }

  openRegister() {
    this.modal.openDialog(RegisterComponent, "500px", "600px");
  }

}