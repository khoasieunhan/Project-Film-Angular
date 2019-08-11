import { Component, OnInit, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { ModalTrailerPhimService } from 'src/app/service/modal-trailer-phim.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-trailer-phim',
  templateUrl: './modal-trailer-phim.component.html',
  styleUrls: ['./modal-trailer-phim.component.css']
})
export class ModalTrailerPhimComponent implements OnInit, OnDestroy, AfterViewInit {
  public isOpen = false;
  public sub: Subscription;
  public phimTrailer: any;
  public Title = '';
  @Input() phimInput;
  constructor(private modalTrailerPhim: ModalTrailerPhimService) { }

  ngOnInit() {
    this.modalTrailerPhim.data.subscribe(
      (data: any) => {
        const ob = JSON.parse(data);
        this.phimTrailer = ob.phimTrailer;
        this.isOpen = ob.isOpen;
        this.Title = ob.Title;
      });
  }

  ngOnDestroy () {
    // this.sub.unsubscribe();
  }

  ngAfterViewInit () {

  }
}
