import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalLoginAdminService {
  public isOpenModal = new BehaviorSubject({}); // Lưu vào
  public getOpenModal = this.isOpenModal.asObservable(); // Lấy ra
  public setIsOpenModal(thamso) {
    this.isOpenModal.next(thamso);
  }

  // tslint:disable-next-line:member-ordering
  @Output() data = new EventEmitter();
  constructor() { }
}
