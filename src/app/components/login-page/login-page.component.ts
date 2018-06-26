import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private auth: AuthService,
    private user: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  public login() {
    this.auth.login(this.loginForm.value.username, this.loginForm.value.password).subscribe(d => {
      this.user.setToken(d.token);
      this.router.navigate(['/dashboard']);
    }, e => {
      alert("เฮ้ย!!");
    });
  }

}
