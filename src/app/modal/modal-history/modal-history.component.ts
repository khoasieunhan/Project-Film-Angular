import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalHistoryService } from 'src/app/service/modal-history.service';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
declare var $: any;

@Component({
  selector: 'app-modal-history',
  templateUrl: './modal-history.component.html',
  styleUrls: ['./modal-history.component.css']
})
export class ModalHistoryComponent implements OnInit, AfterViewInit, OnDestroy {
  public isOpen = false;
  public sub: Subscription;
  public hisTory: any;
  public Title = '';
  public hisToryTicket: any[] = [];
  constructor(private modalHistory: ModalHistoryService, private ngDungSV: NgDungServiceService) { }

  ngOnInit() {
    this.modalHistory.data.subscribe(
      (data: any) => {
        const ob = JSON.parse(data);
        this.hisTory = ob.hisTory;
        this.isOpen = ob.isOpen;
        this.Title = ob.Title;
        this.hisToryTicket = ob.hisToryTicket;
        console.log(this.hisToryTicket);
      });

    if (localStorage.getItem('hisTory')) {
      this.hisTory = JSON.parse(localStorage.getItem('hisTory'));
    }

    // this.ngDungSV.HistoryTicket(this.hisTory).subscribe(
    //   (kq: any) => {
    //     this.hisToryTicket = kq;
    //     localStorage.setItem('hisTory', JSON.stringify(this.hisToryTicket));
    //     console.log(this.hisToryTicket);
    //   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('#myTable').DataTable();
    });
    // Call the dataTables jQuery plugin
    // $(document).ready(function () {
    //   const table = $('#example').DataTable({
    //     fixedColumns: {
    //       leftColumns: 2
    //     },
    //     columnDefs: [{
    //       orderable: false,
    //       className: 'select-checkbox',
    //       targets: 0,
    //       // 'render': function (data, type, full, meta) {
    //       //   return '<input type="checkbox" name="MaPhim" value="' + $('<div/>').text(data).html() + '" (change)="checkbox(phim)">';
    //       // }
    //     }],
    //     select: {
    //       style: 'os',
    //       selector: 'td:first-child'
    //     },
    //     order: [[1, 'asc']]
    //   });
    //   table.rows().invalidate().draw();
    // });
    // const table = $('#example').DataTable();
  }
}
