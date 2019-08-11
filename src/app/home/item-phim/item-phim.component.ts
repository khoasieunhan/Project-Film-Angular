import { Component, OnInit, Input, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
// import * as $ from 'jquery';
import { Subscription } from 'rxjs';
// import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PhimServiceService } from 'src/app/service/phim-service.service';
import { NgForm } from '@angular/forms';
import { ModalTrailerPhimService } from 'src/app/service/modal-trailer-phim.service';
declare var $: any;

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.css']
})
export class ItemPhimComponent implements OnInit, AfterViewInit, OnDestroy {

  sub: Subscription;

  public TrailerPhim: any;
  @Input() phimInput;
  phimChiTiet: any;
  maPhim: any;
  iframe: HTMLEmbedElement;
  @ViewChild('phimTrailer') phimTrailer: NgForm;
  constructor(private router: Router, private phimService: PhimServiceService, private modalTrailerPhim: ModalTrailerPhimService) { }

  ngOnInit() {
    // this.titleService.setTitle('Trang chủ');
    // this.maPhim = this.phimInput.MaPhim;
    // this.phimService.LayChiTietPhim(this.maPhim).subscribe(
    //   (data: any) => {
    //     this.phimChiTiet = data;
    //     console.log(this.phimChiTiet);
    //     let traiLer = this.phimChiTiet.Trailer;
    //     traiLer = traiLer.split('watch?v=');
    //     this.TrailerPhim = traiLer[1];
    //   });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  getEmbed(embed: any) {
     // tslint:disable-next-line:max-line-length
     const object = { isOpen: true};
     this.modalTrailerPhim.setIsOpenModal(object);
     this.modalTrailerPhim.data.emit(JSON.stringify(object));
    let traiLer = embed;
    traiLer = traiLer.split('watch?v=');
    this.TrailerPhim = traiLer[0] + 'embed/' + traiLer[1];
    const $videoSrc = this.TrailerPhim;
    $(document).ready(function () {
      // when the modal is opened autoplay it
      $('#myModalz').on('shown.bs.modal', function (e) {
        // $('#myInput').trigger('focus');
        // $('.modal-backdrop').removeClass('modal-backdrop');
        // tslint:disable-next-line:max-line-length
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $('#video').attr('src', $videoSrc + '?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1');
      }).modal('show');

      // stop playing the youtube video when I close the modal
      $('#myModalz').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $('#video').attr('src', $videoSrc);
      }).modal('hide');
      // document ready
    });
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.js-modal-btn').modalVideo({
        loop: 0
      });
    });
  }
}
