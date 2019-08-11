import { Injectable, EventEmitter, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalTrailerPhimService {
  public isOpenModal = new BehaviorSubject({}); // Lưu vào
  public getOpenModal = this.isOpenModal.asObservable(); // Lấy ra
  public setIsOpenModal(thamso) {
    this.isOpenModal.next(thamso);
  }

  // tslint:disable-next-line:member-ordering
  @Output() data = new EventEmitter();
  constructor() { }
}
