import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';

@Injectable({ providedIn: 'root' })
export class WelcomeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let begin = this.authService.beginDone;
    if (begin) {
      this.router.navigate(['/']);
    }
    return !begin;
  }
}
