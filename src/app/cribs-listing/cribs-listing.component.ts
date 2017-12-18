import { Component, OnInit } from '@angular/core';
import { Crib } from 'app/crib';
import {Http} from '@angular/http';
import { CribsService } from 'app/services/cribs-service.service';

@Component({
  selector: 'app-cribs-listing',
  templateUrl: './cribs-listing.component.html',
  styleUrls: ['./cribs-listing.component.css']
})
export class CribsListingComponent implements OnInit {
  error: string;

    crib: Array<any>;
  constructor(private http: Http, private cribService : CribsService) { }

  ngOnInit() {

    // making an http request

    this.cribService.getAllCribs().subscribe(data => this.crib = data,
    error =>this.error = error.statusText);

    this.cribService.newCribSubject.subscribe(
      data => {console.log(data);})
  }


}
