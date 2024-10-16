import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent  {
  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]], // Solo permite números
      password: ['', [Validators.required, Validators.minLength(6)]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onRegister() {
    if (this.registrationForm.valid) {
      // Lógica para manejar el registro
      console.log(this.registrationForm.value);
    }
  }

  onCancel() {
    this.router.navigate(['/home']);
  }

}
