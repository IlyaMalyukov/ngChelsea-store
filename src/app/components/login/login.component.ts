import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('',
        [Validators.email, Validators.required]),
      password: new FormControl(null,
        [Validators.required, Validators.minLength(6)])
    });
  };

  submit(){
    if(this.form.valid) {
      const formData = {...this.form.value};
    };
  };

}
