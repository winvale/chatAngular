import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatAngular';

  usuario={
    email:'',
    password: ''
  }
  constructor(private authService:AuthService){

  }
  Ingresar(){
    console.log(this.usuario)
    const {email,password}=this.usuario;
    this.authService.registro(email,password).then(res=>{
      console.log("se registro correctamente:",res)
    });
  }

  IngresarGoogle(){
    console.log(this.usuario)
    const {email,password}=this.usuario;
    this.authService.loginWithGoogle(email,password).then(res=>{
      console.log("se registro correctamente:",res)
  });
}

}
