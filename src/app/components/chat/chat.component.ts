import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  mostrarChat =true;
  nuevoMensaje:string="";
  usuarioLogeado: any;
  mensajes:any=[
    {
      emisor:"X1itQGEGKdYHVdOdQjbGaY7p8Rq1",
      texto:"Hola  esto es una prueba "
    },
    {
      emisor:"id",
      texto:"Hola la prueba esta bien "
    },
    {
      emisor:"X1itQGEGKdYHVdOdQjbGaY7p8Rq1",
      texto:"  ok"
    },
    {
      emisor:"id",
      texto:"keneth HP "
    },
    {
      emisor:"id",
      texto:"xd"
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
    if(this.nuevoMensaje=="")return;
    console.log(this.nuevoMensaje);
    let mensaje= 
      {
        emisor: this.usuarioLogeado.uid,
        texto:this.nuevoMensaje
      }
    this.mensajes.push(mensaje);  
    this.nuevoMensaje="";
    this.scrollToTheLastElementByClassName();

    setTimeout(() => {
      this.scrollToTheLastElementByClassName()
    }, 10);
}
 
  scrollToTheLastElementByClassName(){
    let elements = document.getElementsByClassName('msj');
    let ultimo: any = elements[(elements.length-1)];
    let toppos = ultimo.offsetTop;

    //@ts-ignore
    document.getElementById('contendedordeMensajes')?.scrollTop = toppos;
  }
}