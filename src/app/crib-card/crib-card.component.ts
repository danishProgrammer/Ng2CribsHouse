import { Component, OnInit,Input } from '@angular/core';
import { Crib } from 'app/crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {
 @Input('crib') data : Crib;
  constructor() { }

  ngOnInit() {
  }

}
