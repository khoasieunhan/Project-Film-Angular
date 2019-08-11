import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TenGheBehaviorService {

  public TenGheP: Array<any> = [];
  public isTenGheP = new BehaviorSubject(this.TenGheP); // Lưu vào
  public getTenGheP = this.isTenGheP.asObservable(); // Lấy ra
  public setTenGheP(thamso) {
    this.isTenGheP.next(thamso);
  }

  // tslint:disable-next-line:member-ordering
  @Output() data = new EventEmitter();
  constructor() { }
}
