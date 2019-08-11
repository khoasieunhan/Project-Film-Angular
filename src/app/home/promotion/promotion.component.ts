import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickAlert($event) {
    (async function getText() {
      $event.preventDefault();
      const { value: any } = await swal({
        input: 'textarea',
        inputPlaceholder: 'Type your message here...',
        showCancelButton: true
      });

      if (any) {
        swal('You want to comment on this article');
      }
    })();
  }
}
