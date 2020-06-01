import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SigninService } from '../services/signin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  constructor(
    private _signinService: SigninService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    // no initialization
  }
  onSubmit(): void {
    this._signinService.authenticate(this.signinForm.value).subscribe((data) => {
      if (data) {
        alert('Sign In Successfull');
        this._router.navigate(['dashboard']);
      } else {
        alert('Incorrect Credentials');
      }
    });
    console.log(this.signinForm);
    // console.log(this.signinForm.get(userName).value);
  }

}
