import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

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
