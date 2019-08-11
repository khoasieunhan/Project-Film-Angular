import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.css']
})
export class DanhSachGheComponent implements OnInit {

  @Input() danhSachGhe: any[];
  constructor() { }
  ngOnInit() {
  }

}
