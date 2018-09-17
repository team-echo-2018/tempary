import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private userservice: UserService) { }

  u_name: string;
  pwd: string;

  ngOnInit() {
  }

  login() {
    // alert(this.userservice.login(this.u_name, this.pwd));
    this.userservice.login(this.u_name, this.pwd);
  }


}
