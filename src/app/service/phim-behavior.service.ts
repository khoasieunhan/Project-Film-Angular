import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhimBehaviorService {

  public isLimit = false;
  public listGheDangDat: Array<any> = [];
  public listGhe: Array<any> = [];
  public isListGheDangDat = new BehaviorSubject(this.listGheDangDat); // Lưu vào
  public getListGheDangDat = this.isListGheDangDat.asObservable(); // Lấy ra
  public setListGheDangDat(thamso) {
    this.isListGheDangDat.next(thamso);
  }

  // tslint:disable-next-line:member-ordering
  @Output() data = new EventEmitter();
  constructor() { }
}
