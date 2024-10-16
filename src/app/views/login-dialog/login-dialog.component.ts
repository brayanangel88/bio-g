import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { form: FormGroup }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
    this.router.navigate(['/register-user']);
  }

  onSubmit(): void {
    if (this.data.form.valid) {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';
      localStorage.setItem('authToken', token);
      this.router.navigate(['/admin-product']);
      this.dialogRef.close(this.data.form.value);
    }
  }

}
