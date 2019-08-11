import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  messages: any;
  private socket = io('http://localhost:3000');

  sendMessage(data) {
    this.messages = data;
    this.socket.emit('message', data);
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }

  newMessageReceived() {
    const observable = new Observable<{ user: any, message: any, img: any }>(observer => {
      this.socket.on('new_message', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });

    return observable;
  }

//   newMessageReceived = () => {
//     return Observable.create((observer) => {
//         this.socket.on('new-message', (message) => {
//           console.log(message);
//             observer.next(message);
//         });
//     });
// }
}
