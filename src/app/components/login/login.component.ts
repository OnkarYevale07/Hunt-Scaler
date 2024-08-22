import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SetPasswordModalComponent } from "../set-password-modal/set-password-modal.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SetPasswordModalComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
