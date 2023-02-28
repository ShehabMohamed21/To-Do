import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  start = true;
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onBegin() {
    this.start = false;
    this.authService.beginDone = false;
    this.router.navigate(['signup']);
  }
}
