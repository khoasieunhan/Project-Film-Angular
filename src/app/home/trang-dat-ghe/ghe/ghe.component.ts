import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PhimBehaviorService } from 'src/app/service/phim-behavior.service';
import swal from 'sweetalert2';
import { TenGheBehaviorService } from 'src/app/service/ten-ghe-behavior.service';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.css']
})
export class GheComponent implements OnInit {

  @Input() ghe: any;
  @Input() listTicket: any;
  public TrangThaiDangDat = false;
  @Output() eventDatGhe: any = new EventEmitter();

  constructor(private phimBehavior: PhimBehaviorService, private tenGheP: TenGheBehaviorService) { }

  ngOnInit() {
    this.phimBehavior.data.subscribe((data: any) => {
      const ob = JSON.parse(data);
      this.ghe = ob.ghe;
    });

    this.tenGheP.data.subscribe((data: any) => {
      const ob = JSON.parse(data);
      this.ghe = ob.ghe;
    });
  }

  DatGhe() {
    // debugger
    if (this.TrangThaiDangDat) {
      this.TrangThaiDangDat = false;
      let i = 0;
      for (const gheP of this.phimBehavior.listGhe) {
        this.phimBehavior.listGhe.splice(i, 1);
        i++;
      }
      console.log(this.phimBehavior.listGhe.length);
    } else {
      // tslint:disable-next-line:max-line-length
      this.phimBehavior.listGhe.push({ MaGhe: this.ghe.MaGhe, TenGhe: this.ghe.TenGhe, GiaVe: this.ghe.GiaVe, TrangThai: this.TrangThaiDangDat });
      console.log(this.phimBehavior.listGhe.length);
      if (this.listTicket.length < this.phimBehavior.listGhe.length) {
        // debugger
        this.phimBehavior.listGhe.push({id: 1});
        let i = 0;
        for (const gheP of this.phimBehavior.listGhe) {
          if (this.phimBehavior.listGhe.length) {
            this.phimBehavior.listGhe.splice(i, 1);
          }
          i++;
        }
        swal({
          type: 'error',
          title: 'Please buy more tickets!',
          text: 'Please select the correct ticket number!',
        });
        return;
      }
      this.TrangThaiDangDat = true;
    }
    // this.TrangThaiDangDat = !this.TrangThaiDangDat;
    // tslint:disable-next-line:max-line-length
    const ghe = { MaGhe: this.ghe.MaGhe, TenGhe: this.ghe.TenGhe, GiaVe: this.ghe.GiaVe, TrangThai: this.TrangThaiDangDat };
    this.eventDatGhe.emit(ghe);
    console.log(this.phimBehavior.listGheDangDat);
  }
}
