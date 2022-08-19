import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit',
  template: '<p>Loading...</p>'
})
export class ExitComponent implements OnInit {

private router: Router
private auth: AuthService;
private toastr: ToastrService;

  constructor(router: Router, auth: AuthService, toastr: ToastrService) {
    this.router = router;
    this.auth = auth;
    this.toastr = toastr;
  }

  ngOnInit(): void {
    this.router.navigate(['/login']);
    this.auth.logout();
    this.toastr.info("Logout realizado com sucesso", "Logout");
  }

}
