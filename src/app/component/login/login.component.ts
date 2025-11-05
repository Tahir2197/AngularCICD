import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMsg: any;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })
  constructor(private auth: AuthService, private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // if (this.auth.isLoggedIn()) {
    //   this.router.navigate(['admin']);
    // }
  }

  onSubmit() {
   if (this.loginForm.valid) {
    this.auth.login(this.loginForm.value).subscribe(
      (result) => {
        if(result.role == "admin") {
          console.log("admin",result);
          this.router.navigate(['/admin']);
        } 
        if(result.role == "user") {
          console.log("user",result);
          this.router.navigate(['/user']);
        }
      },
      (err: Error) => {
        this.errorMsg = err.message;
      }
    );
    }
  }

}
