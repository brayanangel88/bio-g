import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginForm: FormGroup;
  login:boolean=false;
  
  constructor(private dialog: MatDialog, private fb: FormBuilder, private router: Router,) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    if(token){
      this.login = true;
    }
  }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '30%',
      data: { form: this.loginForm }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.login = true;
        console.log('Usuario ha iniciado sesión:', result);
      }
    });
  }
  onLogout() {
    this.login = false;
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
  openNewProduct(){
    this.router.navigate(['/create-product']);
  }
  openAdminProduct(){
    this.router.navigate(['/admin-product']);
  }

}
