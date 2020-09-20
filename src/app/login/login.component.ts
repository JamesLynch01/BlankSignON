import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formSubmit: FormGroup;
  validLogin = true;

  get inputEmailInvaild(): boolean {
    return !this.formSubmit.controls.inputEmail.valid &&
    this.formSubmit.controls.inputEmail.touched;
  }

  get inputPasswordInvalid(): boolean {
    return !this.formSubmit.controls.inputPassword.valid && 
    this.formSubmit.controls.inputPassword.touched;
  }
  constructor(private formBuilder: FormBuilder, 
    private authService: AuthService, private router: Router) {

    this.formSubmit = this.formBuilder.group({
      inputEmail: ['', Validators.email],
      inputPassword: ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formSubmit.value);
    
    this.validLogin = this.authService.login(this.formSubmit.controls.inputEmail.value, this.formSubmit.controls.inputPassword.value)

    if (this.validLogin) {
      this.router.navigate(['/new-profile']);
    }
  }
}
