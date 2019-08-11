import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NguoiDung } from 'src/app/models/nguoiDung';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
declare var $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Call the dataTables jQuery plugin
    $(document).ready(function () {
      $('#dataTable').DataTable();
    });
  }
}
