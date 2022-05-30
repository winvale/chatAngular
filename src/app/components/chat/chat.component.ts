import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  nuevoMensaje:string="";
  constructor() { }

  ngOnInit(): void {
  }
  enviarMensaje(){
    console.log(this.nuevoMensaje);
  }
}
