import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any;
  form: FormGroup = new FormGroup({
    
    email: new FormControl(''),
    password: new FormControl(''),
    
  });
  submitted = false;


  constructor(private loginsrc: LoginService, private http: HttpClient, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,  Validators.minLength(6),
        Validators.maxLength(8)]]
    });
  }


  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }


  loginData() {

    debugger
    this.loginsrc.getLogin().subscribe((data: any) => {
      this.submitted = true;

      debugger
      console.log(data);
      const user = data.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password;

      })
      if (user) {
        // alert("Login is Sucessfully");
        this.loginForm.reset();
        localStorage.setItem("isloggedIn","false");

        this.router.navigate(['/Person-List']);
      }
      


    })
  }
}

