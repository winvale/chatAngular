import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userLogged = this.authService.getuserLogged();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  salir(){
    this.authService.logout();
  }
  eliminar(){
    this.authService.delete_user("userLogged", "asa");
  }
}
