import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usuario={
    email:'',
    password: ''
  }
  constructor(private authService:AuthService){

  }
  registrar(){
    console.log(this.usuario)
    const {email,password}=this.usuario;
    this.authService.registro(email,password).then(res=>{
      console.log("Regitro Normal:",res)
    });
  }
  ngOnInit(): void {
  }

}
