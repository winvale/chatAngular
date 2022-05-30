import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  nuevoMensaje:string="";
  usuarioLogeado: any;
  mensajes:any=[
    {
      emisor:"id",
      texto:"Hola  AASsa "
    },
    {
      emisor:"id",
      texto:"Hola adasdasd "
    },
    {
      emisor:"id",
      texto:"Hola  asdasd asdas "
    },
    {
      emisor:"id",
      texto:"Hola asdasdasd asdasdasd "
    },
  ];
    constructor(private authService:AuthService){

    }
  ngOnInit(): void {
      this.authService.getuserLogged().subscribe(usuario=>{
        this.usuarioLogeado = usuario;
      }
        );
  }
  enviarMensaje(){
    console.log(this.nuevoMensaje);
    this.nuevoMensaje="";
  }
}
