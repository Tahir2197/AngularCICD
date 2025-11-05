import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;
  message = "";

  dataList: Array<any> = [];

  constructor(private auth: AuthService, private router: Router,private formBuilder: FormBuilder,private registrationService : RegistrationService) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        contactNo: ['', [Validators.required]],
        password: ['',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
      },
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }

    var request = {  
      userId : 0,
      firstName : this.form.value.firstName,
      lastName : this.form.value.lastName,
      contactNo : this.form.value.contactNo,
      email : this.form.value.email,
      password : this.form.value.password
    }
   
    // this.registrationService.post(request).subscribe({
    //   next: (res) => {
    //     if(res)
    //     this.submitted = true;
    //     this.message = 'Saved successfully.'
    //     this.router.navigate(['login']);
    //   },
    //   error: (e) => console.error(e)
    // });;
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
    this.message = '';
  }
}
