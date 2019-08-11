// import { Injectable } from '@angular/core';
// import * as io from 'socket.io-client';
// import { Observable } from 'rxjs';
// // tslint:disable-next-line:import-blacklist
// import * as Rx from 'Rx';
// import { environment } from '../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })

// export class WebsocketService {

//   private socket;

//   constructor() { }

//   connect(): Rx.Subject<MessageEvent> {
//     this.socket = io(environment.ws_url);

//     // tslint:disable-next-line:no-shadowed-variable
//     const observable = new Observable(observer => {
//       this.socket.on('message', (data) => {
//         console.log('khoa');
//         observer.next(data);
//       });
//       return () => {
//         this.socket.disconnect();
//       };
//     });

//     const observer = {
//       next: (data: Object) => {
//         this.socket.emit('message', JSON.stringify(data));
//       },
//     };

//     return Rx.Subject.create(observer, observable);
//   }
// }
