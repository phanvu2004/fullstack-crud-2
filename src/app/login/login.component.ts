import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { Hub } from 'aws-amplify/utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AmplifyAuthenticatorModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {
    Hub.listen('auth', (data) => {
      this.onAuthEvent(data);
    });
  }

  onAuthEvent(payload: any) {
    if (payload.event === "signedIn")
      this.router.navigate([''])
  }
}
