import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

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
