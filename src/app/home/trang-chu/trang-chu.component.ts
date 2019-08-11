import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.css']
})
export class TrangChuComponent implements OnInit, OnDestroy {

  sub: Subscription;
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Trang chủ');
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
