import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    if (!f.valid) {
      console.log('f is not valid');
      return;
    }
    const email = f.value.email;
    const password = f.value.password;
    console.log(email);
    console.log(password);
    this.authService.signup(email, password).subscribe((respData) => {
      console.log(respData);
      this.authService.user.subscribe();
      this.router.navigate(['todo']);
    });
    f.reset();
  }
}
