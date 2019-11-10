import { Component, OnInit, } from '@angular/core';

import { from, interval,timer } from 'rxjs';

@Component({
  selector: 'app-subasta',
  templateUrl: './subasta.component.html',
  styleUrls: ['./subasta.component.css'],
})
export class SubastaComponent implements OnInit {
  segundos:  number;
  constructor() {this.segundos=59 }

  ngOnInit() {
    const Time = interval(1000);

    Time.subscribe((n)=>{
        console.log('${n}')
    })
  }

}
